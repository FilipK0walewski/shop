from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from shop import views

urlpatterns = [
    path('kategoria/', views.CategoryList.as_view()),
    path('kategoria-test/', views.category_list),
    path('', views.SnippetList.as_view()),
    path('<int:pk>/', views.SnippetDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
