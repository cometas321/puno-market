from django.urls import path
from .views import ListAllComments, EditComment, DeleteComment, CreateComment

urlpatterns = [
    path('add_comment/', CreateComment.as_view(), name='agregar un comentario'),
    path('list_all/', ListAllComments.as_view(), name='listar los comentarios'),
    path('edit/<int:pk>/', EditComment.as_view(), name='obtener un comentario'),
    path('delete/<int:pk>/', DeleteComment.as_view(), name='eliminar un comentario'),
]
