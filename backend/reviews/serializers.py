# Serializer de Reseñas (reviews)

from rest_framework import serializers
from .models import Review

class ReviewSerializer(serializers.ModelSerializer):
    # Mostrar nombre de usuario en lugar de ID
    user_name = serializers.CharField(source='user.username', read_only=True)
    product_name = serializers.CharField(source='product.name', read_only=True)
    
    class Meta:
        model = Review
        fields = ['id', 'user', 'user_name', 'product', 'product_name', 
                  'rating', 'comment', 'created_at']
        read_only_fields = ['id', 'user', 'created_at']
    
    def validate_rating(self, value):
        if value < 1 or value > 5:
            raise serializers.ValidationError("El rating debe estar entre 1 y 5.")
        return value