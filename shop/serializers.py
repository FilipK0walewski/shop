from rest_framework import serializers

from shop.models import Category, Product


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'parent', 'slug']


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['name', 'price', 'discount_price', 'image', 'slug', 'image']


class ProductDetailSerializer(serializers.ModelSerializer):
    categories = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ['name', 'price', 'discount_price', 'categories', 'description_short', 'description_full', 'image']

    def get_categories(self, obj):
        return Category.objects.get(id=obj.category)