from django.db import models

# Create your models here.
class CommentModel(models.Model):
    nombre = models.CharField(max_length=255)
    correo = models.CharField(max_length=255)
    telefono = models.CharField(max_length=20)
    pais = models.CharField(max_length=100)
    comentario = models.TextField()

    def __str__(self):
        return self.nombre