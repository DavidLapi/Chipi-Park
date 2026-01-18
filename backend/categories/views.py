# ViewSets de Categorias (categories) para manejar CRUD de las categorias de los productos

from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser
from .models import Category
from .serializers import CategorySerializer

# Create your views here.
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get_permissions(self):
        # Solo admin puede crear/editar/eliminar
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [IsAdminUser()]
        # Cualquiera puede ver (GET)
        return [IsAuthenticatedOrReadOnly()]

# Explicación:
# ModelViewSet → crea automáticamente: list, create, retrieve, update, destroy
# get_permissions → define quién puede hacer qué puede hacer