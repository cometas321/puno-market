import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Navbar from "../Components/Nabvar/Nabvar";
import Footer from "../Components/Footer/Footer";
import UserContext from "../context/UserContext"; // Asegúrate de importar el contexto del usuario

const Card = ({ product, onDelete }) => {
  const { cart, setCart } = useContext(UserContext);

  const handleDeleteProduct = () => {
    console.log("Eliminar producto:", product.id);
    // Lógica para eliminar el producto
    onDelete(product.id);
  };

  return (
    <article className="card bg-base-100 shadow-xl overflow-hidden">
      <figure>
        <img
          className="object-cover object-center w-full h-[300px] p-1 rounded-[2rem] hover:scale-105 duration-500"
          src={product.imagen}
          alt={product.productoNombre}
          width={200}
          height={400}
          loading="lazy"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.productoNombre}</h2>
        <p>Descripción: {product.descripcion}</p>
        <p>Precio: ${parseFloat(product.precio).toFixed(2)}</p>
        <div className="card-actions justify-center w-full space-x-4">
          <button
            onClick={handleDeleteProduct}
            className="btn btn-danger text-lg" // Aquí ajustamos el tamaño del botón a 'text-lg'
          >
            Eliminar
          </button>
        </div>
      </div>
    </article>
  );
};

const ProductList = ({ products, onDelete }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Card key={product.id} product={product} onDelete={onDelete} />
      ))}
    </div>
  );
};

const ProductDashboard = () => {
  const { user } = useContext(UserContext); // Obtener datos del usuario logueado
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/product/vendor_product/${user.id}/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error("Error al obtener productos:", error.response.data);
        // Manejo de errores
      }
    };

    if (user && user.id) {
      fetchProducts();
    }
  }, [user]);

  const handleDeleteProduct = async (productId) => {
    try {
      // Lógica para eliminar el producto en la API
      const response = await axios.delete(`http://127.0.0.1:8000/api/product/delete_product/${productId}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("Producto eliminado:", response.data);
      // Actualizar la lista de productos después de eliminar
      setProducts(products.filter((product) => product.id !== productId));
    } catch (error) {
      console.error("Error al eliminar producto:", error.response.data);
      // Manejo de errores
    }
  };

  return (
    <div className="h-screen">
      <main className="p-4">
        <section className="bg-base-100 shadow-xl p-6 rounded-box">
          <h1 className="text-center text-3xl font-bold mb-6">Mis productos en oferta</h1>
          <div className="container mx-auto">
            <ProductList products={products} onDelete={handleDeleteProduct} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDashboard;
