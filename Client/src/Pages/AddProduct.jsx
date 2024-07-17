import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Navbar from "../Components/Nabvar/Nabvar";
import Footer from "../Components/Footer/Footer";
import UserContext from "../context/UserContext"; // Asegúrate de importar el contexto del usuario

const AddProduct = () => {
  const { user } = useContext(UserContext); // Usa el contexto para obtener los datos del usuario

  const [productData, setProductData] = useState({
    productoNombre: "",
    descripcion: "",
    precio: "",
    Category: "",
    proveedor_id: "", // Establece el proveedor_id vacío inicialmente
  });

  useEffect(() => {
    if (user && user.id) {
      setProductData((prevData) => ({
        ...prevData,
        proveedor_id: user.id,
      }));
    }
  }, [user]);

  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("productoNombre", productData.productoNombre);
    formData.append("descripcion", productData.descripcion);
    formData.append("precio", productData.precio);
    formData.append("Category", productData.Category);
    formData.append("proveedor_id", productData.proveedor_id);
    formData.append("imagen", imageFile);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/product/add_product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Si usas autenticación basada en token
        },
      });

      console.log("Respuesta del backend:", response.data);
      // Puedes redirigir al usuario a otra página o mostrar un mensaje de éxito aquí
    } catch (error) {
      console.error("Error al enviar los datos:", error.response.data);
      // Puedes mostrar un mensaje de error al usuario aquí
    }
  };

  return (
    <div className="h-screen">
      <main className="p-4">
        <section className="bg-base-100 shadow-xl p-6 rounded-box">
          <h1 className="text-center text-3xl font-bold mb-6">Crear Producto</h1>
          <div className="container mx-auto">
            <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="productoNombre" className="text-left block">
                  Nombre del Producto
                </label>
                <input
                  type="text"
                  id="productoNombre"
                  placeholder="Ingrese el nombre del producto"
                  className="w-full border rounded-md p-2"
                  value={productData.productoNombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="descripcion" className="text-left block">
                  Descripción
                </label>
                <textarea
                  id="descripcion"
                  placeholder="Ingrese la descripción del producto"
                  className="w-full border rounded-md p-2"
                  value={productData.descripcion}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="precio" className="text-left block">
                  Precio
                </label>
                <input
                  type="number"
                  id="precio"
                  placeholder="Ingrese el precio del producto"
                  className="w-full border rounded-md p-2"
                  value={productData.precio}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="Category" className="text-left block">
                  Categoría
                </label>
                <input
                  type="text"
                  id="Category"
                  placeholder="Ingrese la categoría del producto"
                  className="w-full border rounded-md p-2"
                  value={productData.Category}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="imagen" className="text-left block">
                  Imagen del Producto
                </label>
                <input
                  type="file"
                  id="imagen"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full border rounded-md p-2"
                  required
                />
              </div>
              <div className="col-span-2">
                <button type="submit"  className="btn btn-primary w-full border rounded-md p-2" >
                  Crear Producto
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

export default AddProduct;
