from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from shop import views

urlpatterns = [
    path('products/', views.product_list, name='product-list'),
    path('products/<slug:slug>/', views.product_detail, name='product-detail'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
