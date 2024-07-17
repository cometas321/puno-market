## register: peticion POST: aqui es donde de se va a registrar el usuario
http://127.0.0.1:8000/api/user/register

y de entrada aqui tienes para registrarte
```javascript
{
    "Name": "Juan",
    "LastName": "Perez",
    "Email": "juan@example.com",
    "Password": "contraseña_segura"
}   
```

## login: peticion POST: aqui es donde el usuario se va a loguear 
http://127.0.0.1:8000/api/user/login/

y de entrada de ejemplo para hacer el login

```javascript
{
    "Email": "juan@example.com",
    "Password": "contraseña_segura"
}   
```
y como resultado te da los siguientes datos:

```javascript
{
    "message": "success",
    "user": "Juan",
    "user_id": 1,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZXhwIjoxNzEzMzQxODMzLCJpYXQiOjE3MTMzMzgyMzN9.DLN2-NXqWpTwqIQIcmop5ZOZM3d-gfg-0hnmcEoeNDw"
}
```

## login con token: peticion GET: aqui es donde el token que te dio cuando iniciaste secion lo va a validar para que puedas tener los datos de  del usuario que esta logueado


y como resultado te mada el siguiente formato y para tener todo los datos necesitamos lo que es el token con lo cual obtendremos lo que es datos y vienen de la siguiente manera:
http://127.0.0.1:8000/api/user/profile/


```javascript
{
    "id": 1,
    "Name": "Juan",
    "LastName": "Perez",
    "Email": "juan@example.com",
    "Password": "contraseña_segura"
}

```


## logot view: peticion post el que se encarga de cerrar secion en si eliminar el token de autentificacion que te dieron al loguearte 
http://127.0.0.1:8000/api/user/logout/

ya con esa ruta eliminamos lo que cerramos sesion

