from django.db import models
from django.utils import timezone
from django.utils.text import slugify

SEX_CHOICES = (('woman', 'kobieta'), ('male', 'meżczyzna'))


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(unique=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super(Category, self).save(*args, **kwargs)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=100, unique=True)
    stock = models.PositiveSmallIntegerField()
    price = models.FloatField()
    discount_price = models.FloatField(blank=True, null=True, default=None)
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    description_short = models.TextField()
    description_full = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    sex = models.CharField(choices=SEX_CHOICES, max_length=5, null=True, blank=True )
    slug = models.SlugField(unique=True, blank=True)
    is_draft = models.BooleanField(null=False, default=True)
    updated_at = models.DateTimeField(default=timezone.now)
    created_at = models.DateTimeField(default=timezone.now)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        self.updated_at = timezone.now()
        super(Product, self).save(*args, **kwargs)

    def __str__(self):
        return self.name
