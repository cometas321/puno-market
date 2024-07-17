from rest_framework import serializers
from .models import Product, Category

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = (
            'id',
            'productoNombre',
            'proveedor_id',
            'imagen',
            'precio',
            'descripcion',
            'Category'
        )

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = (
            'id',
            'name'
        )
