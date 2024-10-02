from rest_framework import serializers
from .models import DogFoodDry
from .models import CatFood
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'password']

class DogFoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = DogFoodDry
        fields = "__all__"

class CatFoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = CatFood
        fields = "__all__"