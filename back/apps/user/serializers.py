from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id', 
            'Name',
            'LastName', 
            'Email', 
            'Password'
        )
        extra_kwargs = {'password':{'write_only':True}}
    def create(self, validated_data):
        """
        Create and return a new `User` instance, given the validated data.
        Password is hashed before saving
        """
        password = validated_data.pop('password',None)
        instance = self.Meta.model(**validated_data)
        
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance