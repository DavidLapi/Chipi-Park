# Serializer de Categorias (categories)

from rest_framework import serializers
from .models import Category

class CategorySerializer(serializers.ModelSerializer):
    # Añadir contador de productos (opcional)
    products_count = serializers.IntegerField(
        source='products.count', 
        read_only=True
    )
    
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'description', 'created_at', 'products_count']
        read_only_fields = ['id', 'created_at']