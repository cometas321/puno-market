import React, { useState } from "react";
import Navbar from "../Components/Nabvar/Nabvar";
import Footer from "../Components/Footer/Footer";
import Menu from "../Components/Nabvar/Menu";

const Comentario = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    pais: "",
    comentario: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/comment/add_comment/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el comentario");
      }

      // Reiniciar el formulario después de enviar con éxito
      setFormData({
        nombre: "",
        correo: "",
        telefono: "",
        pais: "",
        comentario: "",
      });

      alert("Comentario enviado correctamente");
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error al enviar el comentario");
    }
  };

  return (
    <div className="h-screen">
      <main className="p-4">
        <section className="bg-base-100 shadow-xl p-6 rounded-box">
          <h1 className="text-center text-3xl font-bold mb-6">Contacto</h1>
          <div className="container mx-auto">
            <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="nombre" className="text-left block">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  placeholder="Ingrese su nombre completo"
                  className="w-full border rounded-md p-2"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="correo" className="text-left block">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="correo"
                  placeholder="Ingrese su correo electrónico"
                  className="w-full border rounded-md p-2"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="telefono" className="text-left block">
                  Número de Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  placeholder="Ingrese su número de teléfono"
                  className="w-full border rounded-md p-2"
                  value={formData.telefono}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="pais" className="text-left block">
                  País
                </label>
                <input
                  type="text"
                  id="pais"
                  placeholder="Ingrese su país"
                  className="w-full border rounded-md p-2"
                  value={formData.pais}
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="comentario" className="text-left block">
                  comentario
                </label>
                <textarea
                  id="comentario"
                  className="w-full border rounded-md p-2"
                  placeholder="Escriba su mensaje aquí"
                  value={formData.Comentario}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="col-span-2">
                <button
                  type="submit"
                  className="btn btn-primary w-full border rounded-md p-2"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Comentario;
