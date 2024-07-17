import { useState, useEffect } from "react";
import UserContext from "./context/UserContext";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Páginas
import Error404 from "./Pages/Error404";
import Section from "./Pages/Section";
import Login from "./Pages/Login";
import AddComment from "./Pages/AddComment";
import AboutUs from "./Pages/AboutUs";
import Categories from "./Pages/categorias/Categories";
import Register from "./Pages/Register";
import Carrito from "./Pages/Carrito/Carrito";
import Profile from "./Pages/Profile";
import Comments from "./Pages/Comments";
import AddProduct from "./Pages/AddProduct";
import ProductUser from "./Pages/ProductUser";

//aquí declaramos las rutas e importamos las páginas ahi deje unos ejemplos con el error 404 pero deberiamos agregar el componente qye corresponda cuando le den a la url que queremos.
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error404 />,
        children: [
            {
                path: "",
                index: true,
                element: <Section />,
            },
            {
                path: "/add_comment",
                element: <AddComment />,
            },
            {
                path: "/comments",
                element: <Comments />,
            },
            {
                path: "/about",
                element: <AboutUs />,
            },
            {
                path: "/products",
                element: <Categories />,
            },
            {
                path: "/cart",
                element: <Carrito />,
            },
            {
                path: "/add_product",
                element: <AddProduct />,
            },
            {
                path: "/product_user",
                element: <ProductUser />,
            }
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "*",
        element: <Error404 />,
    },
]);

const App = () => {
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);
    console.log("Usuario", user);
    console.log("Carrito", cart);
    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (savedUser) {
            setUser(savedUser);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart"));
        if (savedCart) {
            setCart(savedCart);
        }
    }, []);
    return (
        <>
            <UserContext.Provider value={{ user, setUser, cart, setCart }}>
                <RouterProvider router={router} />
            </UserContext.Provider>
        </>
    );
};

export default App;
