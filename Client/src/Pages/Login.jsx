import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApiClient } from "../api/services";
import Swal from "sweetalert2";
import UserContext from "../context/UserContext";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
    const { user, setUser } = useContext(UserContext);
    const apiClient = new ApiClient();
    const [pass, setPass] = useState("password");
    const [loading, setLoading] = useState(false);
    const [formLog, setFormLog] = useState({
        Email: "",
        Password: "",
    });
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        try {
            setLoading(true);
            const response = await apiClient.login(formLog);
            if (response?.data?.token) {
                localStorage.setItem("token", response.data.token);
            }
            const user = await apiClient.log();
            console.log(user.data);
            setUser(user.data);

            Swal.fire({
                title: "¡Éxito!",
                text: response.data.msg,
                icon: "success",
                confirmButtonText: "Aceptar",
            });
            navigate("/");
            return;
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: "¡Error!",
                text: error.response
                    ? error.response.data.msg
                    : "☹ ups.. algo fallo, intente más tarde",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        } finally {
            setLoading(false);
        }
    };

    const handleChangeLog = (e) => {
        const { name, value } = e.target;
        setFormLog({ ...formLog, [name]: value });
    };

    const eyeHandler = () => {
        if (pass === "password") {
            setPass("text");
        } else {
            setPass("password");
        }
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="text-center lg:text-left lg:w-1/2">
                    <h1 className="text-5xl font-bold">PunoMarked</h1>
                    <p className="py-6">
                        “Adentrate a un mundo de productos artensanales hechos a mano”
                    </p>
                    <img
                        src="https://tienda.figurasperuanas.com/wp/wp-content/uploads/2023/01/Artesania_Uros_Islas_Flotantes2-scaled.jpg"
                        alt="Barquito de totora"
                        className="w-full h-auto lg:max-w-md rounded-lg"
                    />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:w-1/2">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <h1 className="text-3xl font-bold">
                                Iniciar Sesion
                            </h1>
                            <label className="label">
                                <span className="label-text">Correo</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Ingresa tu email"
                                name="Email"
                                className="input input-bordered"
                                onChange={handleChangeLog}
                                required
                                value={formLog.Email}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Contraseña</span>
                            </label>

                            <div className="mx-0 px-0  w-full max-w-xs relative">
                                <input
                                    type={pass}
                                    name="Password"
                                    placeholder="Ingresa tu contraseña"
                                    className="input input-bordered w-full max-w-xs"
                                    onChange={handleChangeLog}
                                    required
                                    value={formLog.Password}
                                />
                                <div className="absolute bottom-2 right-5 z-10">
                                    <label className="swap">
                                        <input
                                            type="checkbox"
                                            onChange={eyeHandler}
                                        />
                                        <div className="swap-on">
                                            <AiFillEye className="text-primary" />
                                        </div>
                                        <div className="swap-off">
                                            <AiFillEyeInvisible className="text-primary" />
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <label className="label">
                                <a
                                    href="#"
                                    className="label-text-alt link link-hover"
                                >
                                    ¿Olvidaste tu contraseña?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">
                                <span>Login</span>
                                {loading && (
                                    <span className="loading loading-dots loading-xs"></span>
                                )}
                            </button>
                        </div>
                    </form>
                    <div className="divider">ó</div>

                    <div className="flex w-full mx-auto">
                        <div className="grid h-20 flex-grow card rounded-box place-items-center">
                            <Link to={"/register"} className="link text-center">
                                Registrarse
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;