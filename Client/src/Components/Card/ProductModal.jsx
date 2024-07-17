import PropTypes from "prop-types";

const ProductModal = ({ product, onClose }) => {
    if (!product) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal">
                <div className="modal-content">
                    <img src={product.imageUrl} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Precio: ${product.price}</p>
                    <div className="modal-actions">
                        <button onClick={onClose}>Cerrar</button>
                        <button>Añadir al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductModal.propTypes = {
    product: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }),
    onClose: PropTypes.func.isRequired,
};

export default ProductModal;
