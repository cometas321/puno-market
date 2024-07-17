from django.contrib.auth.hashers import check_password
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer
from rest_framework.exceptions import AuthenticationFailed
import datetime
import jwt

class RegisterView(APIView):
    
    def post(self,request):
        serializer = UserSerializer(data=request.data)
        print("Intentando registrar usuario")
        if serializer.is_valid():
            print("Serializer valido")
            user = serializer.save()
            
            return Response({'status': 'Success'})
        else:
            return Response({'status': 'Error'})
        
class LoginView(APIView):
    """Vista para el login con JWT"""
    def post(self,request):
        # Obtenemos los datos del usuario
        email = request.data['Email']
        password = request.data['Password']
        # Buscamos el usuario en la base de datos
        user = User.objects.filter(Email=email).first()
        # Si no existe el usuario
        if user is None:
            raise AuthenticationFailed('User not found!')
        
        # Comparamos las contraseñas
        if not check_password(password.lower(), user.Password.lower()):
            AuthenticationFailed('Incorrect password!')
        
        payload = {
            'id':user.id,
            'exp':datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat':datetime.datetime.utcnow()
        }
        token = jwt.encode(payload,'secret',algorithm='HS256')
        response = Response()
        response.data = {
            'message':'success',
            'user':user.Name,
            'user_id':user.id,
            'token':token
        }
        response.set_cookie(key='jwt',value=token,httponly=True)
        
        return response
class LoginWithToken(APIView):
    def get(self, request):
        try:
    
            token = request.headers['Authorization'].split(' ')[1]
                                                                
            if not token:
                raise AuthenticationFailed('Unauthenticated!')
            
            payload = jwt.decode(jwt=token,key='secret', algorithms=['HS256'])
            user = User.objects.filter(id=payload['id']).first()
            
            if not user:
                raise AuthenticationFailed('User not found!')

            serializer = UserSerializer(user)
            return Response(serializer.data)

        except jwt.exceptions.DecodeError:
            raise AuthenticationFailed('Invalid token!')

        except jwt.exceptions.ExpiredSignatureError:
            raise AuthenticationFailed('Token has expired!')

        except Exception as e:
            # Otra excepción no controlada
            raise AuthenticationFailed('Authentication error: ' + str(e))

class LogoutView(APIView):
    def post(self,request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message':'success'
        }
        return response

class ProfileView(APIView):
    def get(self, request):
        token = request.headers['Authorization'].split(' ')[1]
        try:
            payload = jwt.decode(jwt=token,key='secret', algorithms=['HS256'])
            user = User.objects.filter(id=payload['id']).first()
            serializer = UserSerializer(user)
            return Response(serializer.data)
        except jwt.exceptions.DecodeError:
            raise AuthenticationFailed('Invalid token!')
    