# Serializer de Productos (products)

from rest_framework import serializers
from .models import Product
from categories.serializers import CategorySerializer

class ProductSerializer(serializers.ModelSerializer):
    # Mostrar categoría completa en lugar de solo el ID
    category_detail = CategorySerializer(source='category', read_only=True)
    
    # Rating promedio (lo calcularemos después)
    average_rating = serializers.SerializerMethodField()
    
    class Meta:
        model = Product
        fields = [
            'id', 'name', 'description', 'price', 'stock',
            'category', 'category_detail', 'product_type',
            'image_url', 'attributes', 'active',
            'average_rating', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']
    
    def get_average_rating(self, obj):
        # Calcular rating promedio de las reseñas
        reviews = obj.reviews.all()
        if reviews:
            return sum(r.rating for r in reviews) / len(reviews)
        return 0


# Serializer simplificado para listas (sin todos los detalles)
class ProductListSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)
    
    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'stock', 'category_name', 'product_type', 'image_url']