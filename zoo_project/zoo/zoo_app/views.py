from django.shortcuts import render
from .models import DogFoodDry
from .models import CatFood
from .serializers import DogFoodSerializer
from .serializers import CatFoodSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK
from rest_framework import viewsets
from rest_framework.views import APIView
from .serializers import UserSerializer


# def home(request):
#     return render(request, "home.html")

class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class DogViewSet(viewsets.ModelViewSet):
    queryset = DogFoodDry.objects.all()
    serializer_class = DogFoodSerializer


class CatViewSet(viewsets.ModelViewSet):
    queryset = CatFood.objects.all()
    serializer_class = CatFoodSerializer




@api_view(['GET'])
def cat_food_list(request):
    if request.method == "GET":
        cat_food = CatFood.objects.all()
        serializer = CatFoodSerializer(cat_food, many=True)
        return Response(serializer.data)


# @api_view(['GET', 'POST'])
# def dog_food(request):
#     if request.method == "GET":
#         dog_food = DogFoodDry.objects.get(pk=id)
#         serializer = DogFoodSerializer(dog_food, many=True)
#         return Response(serializer.data)
