/* eslint-disable react/prop-types */
import { categorias } from "../../constants/api_keys";

const CategoryHeader = ({ products, setProductsFiltered }) => {
    const handleChangeCategory = () => {
        const category = document.getElementById("category")?.value;
        if (category === 0 || category === "0") setProductsFiltered(products);
        const filteredProducts = products.filter(
            (product) => product.category === parseInt(category)
        );
        setProductsFiltered(filteredProducts);
    };

    return (
        <div className="p-4">
            <h2 className="text-3xl font-bold mb-4">Lista Productos</h2>
            <div className="section-content">
                <div className="mb-4">
                    <label htmlFor="category" className="mr-2">
                        Categoría:
                    </label>
                    <select
                        id="category"
                        className="border rounded-md p-2 capitalize"
                        onChange={handleChangeCategory}
                        defaultValue={0}
                    >
                        <option value={0}>Todas</option>
                        {categorias.map((category, index) => (
                            <option key={index} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default CategoryHeader;
