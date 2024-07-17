from django.urls import path
from .views import RegisterView, LoginView, LogoutView, LoginWithToken
from rest_framework import routers

router = routers.DefaultRouter()

urlpatterns = [
    path('register',RegisterView.as_view()),
    path('login',LoginView.as_view()),
    path('logout',LogoutView.as_view()),
    path('profile',LoginWithToken.as_view()),
]