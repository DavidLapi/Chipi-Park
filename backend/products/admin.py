from django.contrib import admin
from .models import Product

# Register your models here.
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'stock', 'category', 'product_type', 'active']
    list_filter = ['product_type', 'category', 'active']
    search_fields = ['name', 'description']