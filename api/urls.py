from django.urls import include, path
from rest_framework import routers
# from shop import views

# router = routers.DefaultRouter()
# router.register(r'users', views.UserViewSet)
# router.register(r'groups', views.GroupViewSet)

# urlpatterns = [
#     path('admin/', admin.site.urls),
# ]

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', include('shop.urls')),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]