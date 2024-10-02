from django.urls import path, include
from . import views
from rest_framework import routers
from . views import DogViewSet
from . views import CatViewSet
from .views import RegisterView

router_dog = routers.DefaultRouter()
router_cat = routers.DefaultRouter()

router_dog.register("dog_food", DogViewSet, basename="dog_food")
router_cat.register("cat_food", CatViewSet, basename="cat_food")

urlpatterns = [
    path('', include(router_dog.urls)),
    path('', include(router_cat.urls)),
    path('register', RegisterView.as_view()),

]