# Modelos de datos de la tabla 'Productos'

from django.db import models
from categories.models import Category

# Create your models here.

class Product(models.Model):
    PRODUCT_TYPES = [
        ('juego_mesa', 'Juego de Mesa'),
        ('videojuego', 'Videojuego'),
        ('peluche', 'Peluche'),
    ]

    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField(default=0)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name='products')
    product_type = models.CharField(max_length=20, choices=PRODUCT_TYPES)
    
    # Imágenes (simple: guarda URLs)
    image_url = models.URLField(blank=True)

    # Atributos específicos (JSON field para flexibilidad)
    attributes = models.JSONField(default=dict, blank=True)
    # Ejemplo: {"jugadores": "2-4", "duracion": "60min"} para juegos
    #          {"plataforma": "PS5", "genero": "RPG"} para videojuegos
    #          {"tamaño": "30cm", "material": "Poliéster"} para peluches

    active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return self.name