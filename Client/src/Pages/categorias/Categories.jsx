import { useEffect, useState } from "react";
import CategoryHeader from "./CategoryHeader";
import ProductList from "./ProductList";

const Categories = () => {
    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);
    useEffect(() => {
        fetch(
            "https://c17-64-n-python-1.onrender.com/api/product/list_products/"
        )
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setProductsFiltered(data);
            })
            .catch((error) => console.error("Error fetching products:", error));
    }, []);
    return (
        <section className=" text-black h-[100rem]">
            <CategoryHeader
                setProductsFiltered={setProductsFiltered}
                products={products}
                productsFiltered={productsFiltered}
            />
            <ProductList
                products={products}
                productsFiltered={productsFiltered}
            />
        </section>
    );
};

export default Categories;
