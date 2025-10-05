import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AdminInsertCategory from './components/AdminInsertCategory';
import AdminInsertProducts from './components/AdminInsertProduct';
import AdminOrders from './components/AdminOrders';
import AdminCategory from './components/AdminCategory';
import AdminLogin from './components/AdminLogin';
import AdminProducts from './components/AdminProducts';
import AdminUsers from './components/AdminUsers';
import AdminHome from './components/AdminHome';
import AdminLogout from './components/AdminLogout';
import AdminEditProducts from './components/AdminEditProducts';
import AdminEditCategory from './components/AdminEditCategory';
import AdminChangePassword from './components/AdminChangePassword';
import AdminForgotPassword from './components/AdminForgotPassword';
import AdminViewOrderDetails from './components/AdminViewOrderDetails';
import AdminViewUserDetails from './components/AdminViewUserDetails';
import NoPage from './components/NoPage';

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
            <Route path='/admin-view-orders/:id' element={<AdminViewOrderDetails />} />
            <Route path='/admin-view-users/:id' element={<AdminViewUserDetails />} />
            <Route path='/admin-logout' element={<AdminLogout />} />
            <Route path='*' element={<NoPage />}/>
        </Routes>
    </BrowserRouter>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRoutes />);
