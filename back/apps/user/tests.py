from django.urls import path, include
from rest_framework import routers
from . import views
from .views import RegisterView, LoginView, LogoutView, LoginWithToken
from django.views.generic import RedirectView

router = routers.DefaultRouter()

urlpatterns = [
    path('register/',RegisterView.as_view()),
    path('login/',LoginView.as_view()),
    path('logout/',LogoutView.as_view()),
    path('profile/',LoginWithToken.as_view()),
]