import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Category from './category';
import Product from './product';
import ProductDetail from './product_detail';
import Login from './login';
import Register from './register';
import Logout from './logout'
import Cart from './cart';
import ForgotPassword from './forgot_password';
import { CookiesProvider } from "react-cookie";
import Wishlist from './Wishlist';
import Checkout from './Checkout';
import ErrorPage from './errorpage';
const root = ReactDOM.createRoot(document.getElementById('root'));
function MyRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Category />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path='/product/:id' element={<Product />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/wishlist' element={<Wishlist />} />
                <Route path='/product-detail/:productid' element={<ProductDetail />} />
                <Route path='/error' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}
root.render(
    <CookiesProvider>
    <MyRouter />
    </CookiesProvider>
);