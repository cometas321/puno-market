import axios from "axios";
import CartService from "./cart";
const Api = axios.create({
    baseURL: "http://localhost:3000",
});

export { CartService };
export default Api;
