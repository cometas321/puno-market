import { useContext } from "react";
import UserContext from "../../context/UserContext";

/* eslint-disable react/prop-types */
const CartCard = ({ product }) => {
    const { cart, setCart } = useContext(UserContext);
    const handleDeleteFromCart = () => {
        const newCart = cart.filter((item) => item.id !== product.id);
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    };
    return (
        <article className="flex border-b-[1px] border-slate-100 py-1 my-2">
            <figure>
                <img
                    className="object-cover object-center h-[100px] w-[200px] hover:scale-105 duration-500"
                    src={product.URL}
                    alt={product.name}
                    width={200}
                    height={100}
                    loading="lazy"
                />
            </figure>
            <div className="card-body grid grid-cols-4 items-center">
                <h2 className="card-title">{product.name}</h2>
                <p>
                    Precio Total: $
                    {parseFloat(product.price).toFixed(2) * product.quantity}
                </p>
                <p>Cantidad: {product.quantity}</p>
                <div className="card-actions justify-center w-full">
                    <button
                        className="btn btn-primary"
                        onClick={handleDeleteFromCart}
                    >
                        Eliminar del carrito
                    </button>
                </div>
            </div>
        </article>
    );
};

export default CartCard;
