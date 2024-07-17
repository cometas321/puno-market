import Api from "./index";
let CartService = {};
CartService.getCart = async (userId) => {
    try {
        const response = await Api.get(`/cart/view_cart/${userId}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

CartService.addToCart = async (data) => {
    try {
        const response = await Api.post("/cart/add_product", data);
        return response.data;
    } catch (error) {
        return error;
    }
};

CartService.removeFromCart = async (userId, productId) => {
    try {
        const response = await Api.post(
            `/cart/${userId}/remove_product/${productId}`
        );
        return response.data;
    } catch (error) {
        return error;
    }
};

CartService.deleteCart = async (userId) => {
    try {
        const response = await Api.delete(`/cart/${userId}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

export default CartService;
