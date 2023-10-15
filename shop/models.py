from django.db import models
from django.utils.text import slugify


class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, blank=True)
    parent = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True)    

    def save(self, *args, **kwargs):
        super(Category, self).save(*args, **kwargs)
        if not self.slug:
            self.slug = slugify(f'{self.name} {self.id}')
            self.save()

    def __str__(self):
        return self.name    


class Product(models.Model):
    name = models.CharField(max_length=100, unique=True)
    price = models.FloatField()
    discount_price = models.FloatField(blank=True, null=True, default=None)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    slug = models.SlugField(unique=True, blank=True)
    description_short = models.TextField()
    description_full = models.TextField()
    is_draft = models.BooleanField(null=False, default=True)
    image = models.ImageField(upload_to='images/', blank=True, null=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super(Product, self).save(*args, **kwargs)

    def __str__(self):
        return self.name


class ProductImage(models.Model):
    image = models.ImageField(upload_to='images/')
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
