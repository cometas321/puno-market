/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";
// import ProductModal from "../../Components/Card/ProductModal";
import Pagination from "../../Components/Pagination/pagination";
import Card from "../../Components/Products/Card";
import ProductModal from "../../Components/Card/ProductModal";

const ProductList = ({ products, productsFiltered }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    console.log("LISTA DE PRODUCTOS", products);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const paginatedProducts = productsFiltered.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {paginatedProducts.length === 0 ? (
                    <div className="text-center">No hay productos</div>
                ) : (
                    paginatedProducts?.map((product) => (
                        <Card
                            key={product.id}
                            product={product}
                            onClick={handleCardClick}
                        />
                    ))
                )}
            </div>

            {showModal && (
                <ProductModal
                    product={selectedProduct}
                    onClose={handleCloseModal}
                />
            )}

            <div className="flex justify-center mt-8">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default ProductList;
