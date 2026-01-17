# Serializer de Pedidos (orders)

from rest_framework import serializers
from .models import Order, OrderItem
from products.serializers import ProductListSerializer
from products.models import Product

class OrderItemSerializer(serializers.ModelSerializer):
    product_detail = ProductListSerializer(source='product', read_only=True)
    
    class Meta:
        model = OrderItem
        fields = ['id', 'product', 'product_detail', 'quantity', 'unit_price', 'subtotal']
        read_only_fields = ['id', 'subtotal']


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)
    user_email = serializers.CharField(source='user.email', read_only=True)
    
    class Meta:
        model = Order
        fields = ['id', 'user', 'user_email', 'total', 'status', 
                  'shipping_address', 'items', 'created_at', 'updated_at']
        read_only_fields = ['id', 'user', 'created_at', 'updated_at']


# Para crear pedidos
class OrderCreateSerializer(serializers.ModelSerializer):
    items = serializers.ListField(write_only=True)
    
    class Meta:
        model = Order
        fields = ['shipping_address', 'items']
    
    def create(self, validated_data):
        items_data = validated_data.pop('items')
        user = self.context['request'].user
        
        # Calcular total
        total = 0
        order_items = []
        
        for item_data in items_data:
            product = Product.objects.get(id=item_data['product_id'])
            quantity = item_data['quantity']
            unit_price = product.price
            subtotal = unit_price * quantity
            total += subtotal
            
            order_items.append({
                'product': product,
                'quantity': quantity,
                'unit_price': unit_price,
                'subtotal': subtotal
            })
        
        # Crear orden
        order = Order.objects.create(
            user=user,
            total=total,
            shipping_address=validated_data['shipping_address']
        )
        
        # Crear items
        for item in order_items:
            OrderItem.objects.create(order=order, **item)
        
        return order