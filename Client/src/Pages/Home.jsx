import { useState, useEffect } from "react";
import Login from "../Pages/Login"; // Importa tu componente Login
import Navbar from "../Components/Nabvar/Nabvar";
import Footer from "../Components/Footer/Footer";
import Menu from "../Components/Nabvar/Menu";

import { Outlet } from "react-router-dom";

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
    };

    return (
        <div className="h-screen overflow-y-auto">
            <header>
                {!isLoggedIn && <Login onLogin={handleLogin} />}
                {isLoggedIn && (
                    <>
                        <Navbar onLogout={handleLogout} />
                        <Menu />
                    </>
                )}
            </header>
            <main className="">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
