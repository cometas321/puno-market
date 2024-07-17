from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('api/user/', include('apps.user.urls')),

    path('admin/', admin.site.urls),
    path('api/product/', include('apps.product.urls')),
    path('api/comment/', include('apps.comment.urls'))
]
