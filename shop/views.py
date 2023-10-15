from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from shop.serializers import CategorySerializer, ProductDetailSerializer, ProductSerializer
from shop.models import Category, Product


@api_view(['GET'])
def product_list(request, format=None):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def product_detail(request, slug):
    product = Product.objects.get(slug=slug)
    serializer = ProductDetailSerializer(product)
    return Response(serializer.data)


@api_view(['GET'])
def category_list(request, pk=None):
    categories = Category.objects.filter(parent=pk)
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def category_tree(request):
    def build_category_tree(category):
        category_data = CategorySerializer(category).data
        subcategories = category.category_set.all()
        if subcategories:
            category_data['subcategories'] = [build_category_tree(subcategory) for subcategory in subcategories]
        return category_data

    root_categories = Category.objects.filter(parent=None)
    tree = [build_category_tree(category) for category in root_categories]
    return Response(tree)
