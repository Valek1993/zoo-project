import os

from django.db import models
from django.contrib.auth.models import AbstractUser


def get_clinic_image_path(instance, filename):
    return os.path.join('image/image_cat/', f"{instance.id_image}.png",
                        )


class DogFoodDry(models.Model):
    id_image = models.IntegerField(blank=True, default=0)
    name = models.CharField(max_length=200, default="default title")
    title = models.CharField(max_length=200, default="default title")
    weight = models.DecimalField(max_digits=5, decimal_places=2)
    age_of_the_animal = models.CharField(max_length=200)
    animal_size = models.CharField(max_length=200)
    availability = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    image = models.ImageField(max_length=200, upload_to=get_clinic_image_path, null=True)
    link = models.CharField(max_length=1000, default="default title")
    image_link = models.CharField(max_length=1000, default="default title")
    description = models.CharField(max_length=5000, default="default title")
    manufacturer = models.CharField(max_length=200, default="")
    sale = models.BooleanField(default=False)
    old_price = models.DecimalField(max_digits=5, decimal_places=2, null=True)

class CatFood(models.Model):
    id_image = models.IntegerField(blank=True, null=True, default=0)
    name = models.CharField(max_length=200, default="default title")
    title = models.CharField(max_length=200, default="default title")
    weight = models.DecimalField(max_digits=5, decimal_places=3)
    age_of_the_animal = models.CharField(max_length=200)
    animal_size = models.CharField(max_length=200)
    availability = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    image = models.ImageField(max_length=200, upload_to=get_clinic_image_path, null=True)
    link = models.CharField(max_length=1000, default="default title")
    image_link = models.CharField(max_length=1000, null=True,  default="default title")
    description = models.CharField(max_length=5000, default="default title")
    manufacturer = models.CharField(max_length=200, default="")
    sale = models.BooleanField(default=False)
    old_price = models.DecimalField(max_digits=5, decimal_places=2, null=True)



class BirdFood(models.Model):
    id_image = models.IntegerField(blank=True, default=0)
    name = models.CharField(max_length=200, default="default title")
    title = models.CharField(max_length=200, default="default title")
    weight = models.DecimalField(max_digits=5, decimal_places=2)
    age_of_the_animal = models.CharField(max_length=200)
    animal_size = models.CharField(max_length=200)
    availability = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    image = models.ImageField(max_length=200, upload_to=get_clinic_image_path, null=True)
    link = models.CharField(max_length=1000, default="default title")
    image_link = models.CharField(max_length=1000, default="default title")
    description = models.CharField(max_length=5000, default="default title")
    manufacturer = models.CharField(max_length=200, default="")
    sale = models.BooleanField(default=False)
    old_price = models.DecimalField(max_digits=5, decimal_places=2, null=True)


class User(AbstractUser):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    username = None

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []
