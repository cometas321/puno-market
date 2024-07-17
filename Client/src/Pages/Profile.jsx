import React, { useState, useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
import { ApiClient } from "../api/services"; // Importa el cliente Axios
import Login from "../Pages/Login";
import Navbar from "../Components/Nabvar/Nabvar";
import Footer from "../Components/Footer/Footer";
import Menu from "../Components/Nabvar/Menu";
import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null); // Estado para almacenar los datos del perfil

    // Obtener el cliente Axios del contexto
    const { fetchUserData } = useContext(UserContext);
    const apiClient = new ApiClient();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
            // Llama a la función para obtener los datos del perfil desde el backend
            fetchProfileData(token);
        }
    }, [fetchUserData]);

    // Función para obtener los datos del perfil desde el backend
    const fetchProfileData = async (token) => {
        try {
            // Realiza la solicitud al backend para obtener los datos del perfil
            const response = await apiClient.log();
            if (response && response.data) {
                // Almacena los datos del perfil en el estado
                setUserData(response.data);
            }
        } catch (error) {
            console.error("Error fetching profile data:", error);
        }
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
    }

    return (
        <div className="h-screen overflow-y-auto">
            <header>
                {!isLoggedIn && <Login onLogin={handleLogin} />}
                {isLoggedIn && (
                    <>
                        <Navbar onLogout={handleLogout} />
                        <Menu />
                    </>
                )}
            </header>
            <main className="p-4">
                {isLoggedIn && userData ? (
                    // Mostrar los datos del perfil si el usuario está autenticado y los datos del perfil están disponibles
                    <section className="md:flex flex-row md:w-full md:px-10 md:py-20">
                        <section className="md:w-1/2 md:p-8 rounded-lg md:shadow-xl bg-white ">
                            <h2 className="text-xl font-semibold mb-4">Datos del Perfil</h2>
                            <div className="mb-4">
                                <p className="font-semibold">ID:</p>
                                <p>{userData.id}</p>
                            </div>
                            <div className="mb-4">
                                <p className="font-semibold">Nombre:</p>
                                <p>{userData.Name}</p>
                            </div>
                            <div className="mb-4">
                                <p className="font-semibold">Apellidos:</p>
                                <p>{userData.LastName}</p>
                            </div>
                            <div className="mb-4">
                                <p className="font-semibold">Email:</p>
                                <p>{userData.Email}</p>
                            </div>
                            {/* No muestres la contraseña en el frontend por razones de seguridad */}
                        </section>
                        {/* Sección para mostrar una imagen al azar */}
                        <section className="md:w-1/2 md:p-8 rounded-lg md:shadow-xl bg-white flex flex-col items-center justify-center">
                            <h2 className="text-xl font-semibold mb-4">hola soy {userData.Name}</h2>
                            <img
                                src={"https://odontologica.pages.dev/assets/profile-3eVsZdK9.jpeg"}
                                alt="Imagen aleatoria"
                                className="w-full max-w-sm h-auto rounded-full object-cover"
                                style={{ width: "200px", height: "200px" }}
                            />
                        </section>

                    </section>
                ) : (
                    // Mostrar el componente de inicio de sesión si el usuario no está autenticado
                    <Login onLogin={handleLogin} />
                )}
                <section>
                <div className="flex justify-between mt-8">
                    {/* Botón para dirigir a la lista de productos */}
                    <Link to="/product_user" className="btn btn-primary">
                        Ver Productos
                    </Link>
                    {/* Botón para dirigir a la página de creación de producto */}
                    <Link to="/add_product" className="btn btn-secondary">
                        Crear Producto
                    </Link>
                </div>
                </section>
            </main>
            <Footer />
        </div>
    )
};

export default Profile;
