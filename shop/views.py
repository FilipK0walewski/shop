from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response
from rest_framework.views import APIView

from shop.serializers import CategorySerializer, ProductDetailSerializer, ProductSerializer
from shop.models import Category, Product


@api_view(['GET'])
def product_list(request):
    search = request.query_params.get('search')
    order_by = request.query_params.get('order', '-created_at')
    category = request.query_params.get('category')
    sex = request.query_params.get('sex')

    print(category, sex)

    queryset = Product.objects.all().order_by(order_by)

    if search is not None:
        queryset = queryset.filter(name__contains=search)

    if category is not None:
        queryset = queryset.filter(category__slug=category)

    if sex is not None:
        queryset = queryset.filter(sex=sex)

    paginator = LimitOffsetPagination()
    paginated_data = paginator.paginate_queryset(queryset, request)
    serializer = ProductSerializer(paginated_data, many=True, context={'request': request})

    pagination_data = {
        'count': queryset.count(),
        'next': paginator.get_next_link(),
        'previous': paginator.get_previous_link(),
        'products': serializer.data
    }

    return Response(pagination_data)


@api_view(['GET'])
def product_detail(request, slug):
    product = Product.objects.get(slug=slug)
    serializer = ProductDetailSerializer(product, context={'request': request})
    return Response(serializer.data, template_name='product_detail.html')
