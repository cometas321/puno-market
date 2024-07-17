import React from "react";
import PropTypes from "prop-types";
import { ApiClient } from "../../api/services";
import Swal from "sweetalert2";

const Card = ({ product, onClick }) => {
    const apiClient = new ApiClient();

    const agregarCarrito = async () => {
        try {
            const response = await apiClient.carGetProduct(formLog);
            Swal.fire({
                title: "¡Éxito!",
                text: response.data.msg,
                icon: "success",
                confirmButtonText: "Aceptar",
            });
        } catch (error) {
            Swal.fire({
                title: "¡Error!",
                text: error.response
                    ? error.response.data.msg
                    : "☹ ups.. algo fallo, intente más tarde",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        }
    };
    return (
        <div
            className="card bg-base-100 shadow-xl overflow-hidden"
            onClick={() => onClick(product)}
        >
            <figure>
                <img
                    className="object-cover object-center w-full  h-[300px] p-1 rounded-[2rem] hover:scale-105 duration-500"
                    src={product.URL}
                    alt={product.name}
                    width={200}
                    height={400}
                    loading="lazy"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>Precio: ${parseFloat(product.price).toFixed(2)}</p>
                <div className="card-actions justify-center w-full">
                    <button
                        onClick={agregarCarrito}
                        className="btn btn-primary"
                    >
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        URL: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Card;
