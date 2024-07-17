import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { ApiClient } from "../api/services";
import Swal from "sweetalert2";

const Register = () => {
  const [pass, setPass] = useState("password");
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const apiClient = new ApiClient();
  const navigate = useNavigate();

  const eyeHandler = () => {
    if (pass === "password") {
      setPass("text");
    } else {
      setPass("password");
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await apiClient.register(user);
      Swal.fire({
        title: "¡Éxito!",
        text: response.data.msg,
        icon: "success",
        confirmButtonText: "Aceptar",
      });

      navigate("/login");
    } catch (error) {
      Swal.fire({
        title: "¡Error!",
        text: error.response
          ? error.response.data.errors[0].msg
          : "☹ ups.. algo fallo, intente más tarde",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">PunoMarked</h1>
            <p className="py-6">
            Nuestra pasión por las artesanías únicas y hechas a mano nos impulsa.
            </p>
            <img
            src="https://cdn.www.gob.pe/uploads/document/file/4584694/Inauguran%20expo%20feria%20%E2%80%9CPuno%20es%20artesan%C3%ADa%E2%80%9D%20donde%20participan%20m%C3%A1s%20de%20120%20artesanas.png"
            alt="Cholita Puneña Franela"
            className="w-full h-auto lg:max-w-md"
            />
          </div>
          <div className="py-10 card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:w-1/">
            <form
              className="flex flex-col justify-between items-center gap-3"
              onSubmit={handleSubmit}
            >
              <h1 className="text-3xl">Bienvenido</h1>
              <input
                type="text"
                name="Name"
                placeholder="Ingresa tu nombre"
                className="input input-bordered  w-full max-w-xs"
                onChange={handleChange}
                required
              />
              <input
                type="text "
                name="LastName"
                placeholder="Ingresa tu apellido"
                className="input input-bordered  w-full max-w-xs"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="Email"
                placeholder="Ingresa tu mail"
                className="input input-bordered  w-full max-w-xs"
                onChange={handleChange}
                required
              />
              <div className="mx-0 px-0  w-full max-w-xs relative">
                <input
                  type={pass}
                  name="Password"
                  placeholder="Ingresa tu contraseña"
                  className="input input-bordered  w-full max-w-xs"
                  onChange={handleChange}
                  required
                />
                <div className="absolute bottom-2 right-5 z-10">
                  <label className="swap">
                    <input type="checkbox" onChange={eyeHandler} />
                    <div className="swap-on">
                      <AiFillEye className="text-primary" />
                    </div>
                    <div className="swap-off">
                      <AiFillEyeInvisible className="text-primary" />
                    </div>
                  </label>
                </div>
              </div>

              <button className="btn btn-primary">
                {loading ? "Cargando" : "Registrarme"}
                {loading && (
                  <span className="loading loading-dots loading-xs"></span>
                )}
              </button>
            </form>
            <div className="divider">ó</div>
            <Link to={"/login"} className="link text-center">
              Iniciar sesión
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;