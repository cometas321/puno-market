from django.db import models

# Create your models here.
class Product(models.Model):
    productoNombre = models.CharField(max_length=100, default='')
    proveedor_id = models.ForeignKey('user.User', on_delete=models.CASCADE)
    imagen = models.CharField(max_length=255)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    descripcion = models.TextField()
    Category = models.ForeignKey('Category',related_name='products', on_delete=models.CASCADE)

    def __str__(self):
        return self.productoNombre

class Category(models.Model):
    name = models.CharField(max_length=50, default='')

    def __str__(self):
        return self.name