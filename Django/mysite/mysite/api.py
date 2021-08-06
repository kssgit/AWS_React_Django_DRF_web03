from django.contrib import admin
from django.urls import path, include
# from rest_framework_jwt.views import obtain_jwt_token, verify_jwt_token, refresh_jwt_token
# from .views import validate_jwt_token
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),

    path('myBoard/', include('user.urls')),
]
urlpatterns += \
    static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
