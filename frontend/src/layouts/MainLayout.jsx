import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css';

const MainLayout = () => {
    return (
        <>
            <Header />
            <main className="py-3">
                <Container>
                    <Outlet />
                </Container>
            </main>
            <Footer />
            <ToastContainer />
        </>
    );
};
export default MainLayout;
