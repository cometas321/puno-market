from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product, Category
from .serialzers import ProductSerializer, CategorySerializer   
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from utils.upload_image import upload_file

class IsVendorPermission(APIView):
    def has_permission(self, request, view):
        return request.user and request.user.is_authenticated and request.user.vendor


# listar todos los productos
class ListAllProducts(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

# listar todas las categorias
class ListAllCategories(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

# buscar por categoria
class GetProductsByCategory(APIView):
    def get(self, request, category_name):
        products = Product.objects.filter(Category__name=category_name)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


#acceso solo a los que tienes como vendor en True
class CreateProduct(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        # Accede al atributo 'vendor' del usuario
        imagen =request.data['imagen']
        request.data['imagen'] = upload_file(imagen)
        # Resto de tu lógica para guardar el producto
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UpdateProduct(APIView):
    permission_classes = [AllowAny]

    def put(self, request, product_id):
        product = Product.objects.get(id=product_id)

        imagen =request.data['imagen']
        request.data['imagen'] = upload_file(imagen)

        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DeleteProduct(APIView):
    permission_classes = [AllowAny]

    def delete(self, request, product_id):

        product = Product.objects.get(id=product_id)
        product.delete()
        return Response({"message": "Product deleted successfully."}, status=status.HTTP_204_NO_CONTENT)

class GetProductsByVendor(APIView):
    permission_classes = [AllowAny]

    def get(self, request,user_id):
        products = Product.objects.filter( proveedor_id= user_id)#  (proveedor_id= request.user.id)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)