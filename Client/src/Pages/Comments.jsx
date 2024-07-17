import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer/Footer";

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/comment/list_all');
        if (!response.ok) {
          throw new Error('Error al obtener los comentarios');
        }
        const data = await response.json();
        setComments(data); // Asigna los comentarios obtenidos al estado
      } catch (error) {
        console.error('Error:', error);
        // Manejo de errores, como mostrar un mensaje al usuario
      }
    };

    fetchComments();
  }, []);

  return (
    <main className="h-screen p-4 bg-gray-100">
      <section className="bg-white shadow-xl p-6 rounded-lg">
        <h1 className="text-center text-3xl font-bold mb-6">Comentarios</h1>
        <div className="container mx-auto">
          {comments.length === 0 ? (
            <p className="text-center text-gray-500">No hay comentarios aún.</p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {comments.map((comment) => (
                <li key={comment.id} className="py-4">
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h3 className="text-lg font-semibold mb-2">usuario: {comment.nombre}</h3>
                    <p className="text-sm text-gray-600">comentario: {comment.comentario}</p>
                    <p className="text-xs text-gray-400 mt-2">{comment.fecha}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Comments;
