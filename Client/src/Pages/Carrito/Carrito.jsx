import { useContext } from "react";
import UserContext from "../../context/UserContext";
import CartCard from "./CartCard";
const Carrito = () => {
    const { cart } = useContext(UserContext);
    return (
        <section>
            <div className="container mx-auto p-4">
                <div className="w-full">
                    {cart.length === 0 ? (
                        <div className="text-center">
                            No hay productos en el carrito
                        </div>
                    ) : (
                        cart.map((product) => (
                            <CartCard key={product.id} product={product} />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Carrito;
