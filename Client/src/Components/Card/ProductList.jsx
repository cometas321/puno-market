// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Card from "../Products/Card";
import Pagination from "../Pagination/pagination";
import ProductModal from "../Card/ProductModal";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetch(
            "http://127.0.0.1:8000/api/product/list_products/"
        )
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const itemsPerPage = 6;
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const paginatedProducts = products.slice(
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
                {paginatedProducts.map((product) => (
                    <Card
                        key={product.id}
                        product={product}
                        onClick={handleCardClick}
                    />
                ))}
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
