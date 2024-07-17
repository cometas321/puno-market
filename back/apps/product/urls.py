from django.urls import path
from . import views

urlpatterns = [
    path('list_products/', views.ListAllProducts.as_view(), name='listar todos los productos'),
    path('list_categories/', views.ListAllCategories.as_view(), name='listar todas las categorias'),
    path('category/<str:category_name>/', views.GetProductsByCategory.as_view(), name='buscar por categoria'),
    path('add_product', views.CreateProduct.as_view(), name='agregar un producto'),
    path('update_product/<int:product_id>/', views.UpdateProduct.as_view(), name='actualizar un producto'),
    path('delete_product/<int:product_id>/', views.DeleteProduct.as_view(), name='eliminar un producto'),
    path('vendor_product/<int:user_id>/', views.GetProductsByVendor.as_view(), name='obtener productos del vendedor'),
] 