import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AdminInsertCategory from './AdminInsertCategory';
import AdminInsertProducts from './AdminInsertProduct';
import AdminOrders from './AdminOrders';
import AdminCategory from './AdminCategory';
import AdminLogin from './AdminLogin';
import AdminProducts from './AdminProducts';
import AdminUsers from './AdminUsers';
import AdminHome from './AdminHome';
import AdminLogout from './AdminLogout';
import AdminEditProducts from './AdminEditProducts';
import AdminEditCategory from './AdminEditCategory';
import AdminChangePassword from './AdminChangePassword';
import AdminForgotPassword from './AdminForgotPassword';
import ViewOrderDetails from './ViewOrderDetails';
import NoPage from './NoPage';

function MyRoutes()
{
    return(
    <BrowserRouter>
        <Routes>
            <Route index element={<AdminLogin/>}/>
            <Route path='/admin-home' element={<AdminHome />}/>
            <Route path='/admin-orders' element={<AdminOrders />}/>
            <Route path='/admin-products' element={<AdminProducts />}/>
            <Route path='/admin-category' element={<AdminCategory />}/>
            <Route path='/admin-users' element={<AdminUsers />}/>
            <Route path='/admin-insert-category' element={<AdminInsertCategory />}/>
            <Route path='/admin-insert-products' element={<AdminInsertProducts />}/>
            <Route path='/admin-edit-products/:id' element={<AdminEditProducts />} />
            <Route path='/admin-edit-category/:id' element={<AdminEditCategory />} />
            <Route path='/admin-change-password' element={<AdminChangePassword />} />
            <Route path='/admin-Forgot-password' element={<AdminForgotPassword />} />
            <Route path='/admin-logout' element={<AdminLogout />} />
            <Route path='*' element={<NoPage />}/>
        </Routes>
    </BrowserRouter>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRoutes />);
