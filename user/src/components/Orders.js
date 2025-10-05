import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { FiPackage, FiCalendar, FiDollarSign, FiCheckCircle } from 'react-icons/fi';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import '../css/styles.css';

export default function Orders() {
  const [cookies] = useCookies(['user']);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    if (!cookies['userid']) {
      navigate('/login');
      return;
    }

    // For now, we'll use mock data since there's no orders API
    // In production, you'd fetch from: getBase() + "orders.php?userid=" + cookies['userid']
    const mockOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(mockOrders);
  }, [cookies, navigate]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const capitalizeWords = (str) => {
    if (!str) return str;
    return str.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
  };

  return (
    <>
      <Menu />
      <main className="page-wrapper pb-5" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', minHeight: '100vh' }}>
        
        <div className="hero-section py-4 mt-0 pt-5">
          <div className="container">
            <div className="text-center mb-4">
              <div className="d-inline-flex align-items-center justify-content-center mb-3" 
                   style={{ background: 'rgba(220, 53, 69, 0.1)', padding: '15px', borderRadius: '50%' }}>
                <FiPackage size={40} color="#dc3545" />
              </div>
              <h1 className="display-4 fw-bold mb-3" style={{ color: '#2c3e50' }}>
                My Orders
              </h1>
              <p className="lead text-muted">Track and manage your orders</p>
            </div>
          </div>
        </div>

        <div className="container pb-5">
          {orders.length === 0 ? (
            <div className="cart-empty-state">
              <FiPackage size={80} color="#6c757d" />
              <h3>No orders yet</h3>
              <p>Start shopping and your orders will appear here!</p>
              <a href="/" className="btn-modern btn-modern-primary">
                Start Shopping
              </a>
            </div>
          ) : (
            <div className="row">
              {orders.map((order, index) => (
                <div key={index} className="col-12 mb-4">
                  <div className="order-card">
                    <div className="order-header">
                      <div className="order-info">
                        <h5 className="order-id">Order #{order.id}</h5>
                        <div className="order-meta">
                          <span className="order-date">
                            <FiCalendar className="me-1" />
                            {formatDate(order.date)}
                          </span>
                          <span className="order-status status-completed">
                            <FiCheckCircle className="me-1" />
                            Completed
                          </span>
                        </div>
                      </div>
                      <div className="order-total">
                        <span className="order-total-label">Total</span>
                        <span className="order-total-amount">₹{order.total}</span>
                      </div>
                    </div>
                    <div className="order-items">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="order-item">
                          <div className="order-item-info">
                            <span className="order-item-name">{capitalizeWords(item.title)}</span>
                            <span className="order-item-qty">Qty: {item.quantity}</span>
                          </div>
                          <span className="order-item-price">₹{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
