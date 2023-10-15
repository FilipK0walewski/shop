from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from shop import views

urlpatterns = [
    path('category-list/', views.category_list),
    path('category-list/<int:pk>/', views.category_list),
    path('category-tree/', views.category_tree),
    path('product/', views.product_list),
    path('product/<slug:slug>', views.product_detail),
]

urlpatterns = format_suffix_patterns(urlpatterns)
