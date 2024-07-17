/* eslint-disable react/prop-types */
// import { CartService } from "../../services";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
const Card = ({ product }) => {
    const handleClickProduct = () => {
        console.log("Click en el producto");
    };
    const { cart, setCart } = useContext(UserContext);

    // URL: "https://cdn.pixabay.com/photo/2017/10/21/20/00/buddelschiff-2875759_1280.png";
    // category: 5;
    // id: 25;
    // name: "Artesanías en vidrio";
    // price: "120.00";
    // quantity: 5;
    const handleAddToCart = () => {
        // CartService.addToCart({
        //     id: product.id,
        //     quantity: 1,
        // });
        console.log("Añadir al carrito");
        const productInCart = cart.find((item) => item.id === product.id);
        if (productInCart) {
            const newCart = cart.map((item) => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setCart(newCart);
            localStorage.setItem("cart", JSON.stringify(newCart));
            return;
        }
        product.quantity = 1;
        setCart([...cart, product]);

        localStorage.setItem("cart", JSON.stringify([...cart, product]));
    };

    return (
        <article
            className="card bg-base-100 shadow-xl overflow-hidden"
            onClick={() => handleClickProduct}
        >
            <figure>
                <img
                    className="object-cover object-center w-full  h-[300px] p-1 rounded-[2rem] hover:scale-105 duration-500"
                    src={product.imagen}
                    alt={product.productoNombre}
                    width={200}
                    height={400}
                    loading="lazy"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product.productoNombre}</h2>
                <p>Descripcion: {product.descripcion}</p>
                <p>Precio: ${parseFloat(product.precio).toFixed(2)}</p>
                <div className="card-actions justify-center w-full">
                    <button
                        onClick={handleAddToCart}
                        className="btn btn-primary"
                    >
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </article>
    );
};

export default Card;
