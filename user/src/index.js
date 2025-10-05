import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Category from './components/Category';
import Product from './components/Product';
import AllProducts from './components/AllProducts';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import Cart from './components/Cart';
import ForgotPassword from './components/ForgotPassword';
import { CookiesProvider } from "react-cookie";
import Wishlist from './components/Wishlist';
import Orders from './components/Orders';
import ErrorPage from './components/ErrorPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./css/index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
function MyRouter() {
    return (
        <BrowserRouter>
            <ToastContainer 
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <Routes>
                <Route index element={<Category />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/logout' element={<Logout />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path='/products' element={<AllProducts />} />
                <Route path='/product/:id' element={<Product />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/wishlist' element={<Wishlist />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/product-detail/:productid' element={<ProductDetail />} />
                {/* <Route path='/error' element={<ErrorPage />} /> */}
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}
root.render(
    <CookiesProvider>
    <MyRouter />
    </CookiesProvider>
);