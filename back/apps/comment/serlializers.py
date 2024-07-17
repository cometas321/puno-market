from rest_framework import serializers
from .models import CommentModel as Comment

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = [
            'nombre',
            'correo',
            'telefono',
            'pais',
            'comentario',
        ]