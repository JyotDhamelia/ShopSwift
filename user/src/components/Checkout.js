import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { FiCreditCard, FiLock } from 'react-icons/fi';
import { toast } from '../helpers/toastHelper';
import { useNavigate } from 'react-router-dom';
import '../css/checkout.css';

/* 
 * STRIPE SETUP INSTRUCTIONS:
 * 1. Go to https://dashboard.stripe.com/register
 * 2. Create a free Stripe account
 * 3. Go to https://dashboard.stripe.com/test/apikeys
 * 4. Copy your "Publishable key" (starts with pk_test_)
 * 5. Replace 'YOUR_STRIPE_PUBLISHABLE_KEY' below with your actual key
 * 
 * For now, the payment will work in demo mode without Stripe
 */
const STRIPE_KEY = 'YOUR_STRIPE_PUBLISHABLE_KEY'; // Replace with your actual key
const stripePromise = STRIPE_KEY.startsWith('pk_test_') ? loadStripe(STRIPE_KEY) : null;

function CheckoutForm({ total, cartItems, onSuccess }) {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const navigate = useNavigate();
  const isDemoMode = !STRIPE_KEY.startsWith('pk_test_');

  const saveOrder = () => {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const newOrder = {
      id: 'ORD' + Date.now(),
      date: new Date().toISOString(),
      total: total,
      items: cartItems || [],
      status: 'completed'
    };
    orders.unshift(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    // Demo mode - use simple inputs
    if (isDemoMode) {
      // Validate demo inputs
      if (!cardNumber || !expiry || !cvc) {
        toast.error('please fill all card details');
        setProcessing(false);
        return;
      }

      setTimeout(() => {
        saveOrder();
        toast.success('payment successful! order placed.');
        setProcessing(false);
        onSuccess();
        navigate('/');
      }, 1500);
      return;
    }

    // Real Stripe mode
    if (!elements) {
      setProcessing(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Create payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      toast.error(error.message);
      setProcessing(false);
    } else {
      setTimeout(() => {
        saveOrder();
        toast.success('payment successful! order placed.');
        setProcessing(false);
        onSuccess();
        navigate('/');
      }, 1500);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#2c3e50',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        '::placeholder': {
          color: '#6c757d',
        },
      },
      invalid: {
        color: '#dc3545',
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <div className="checkout-header">
        <FiLock size={24} color="#28a745" />
        <h3>Secure Payment</h3>
      </div>

      {isDemoMode ? (
        // Demo Mode - Simple Input Fields
        <>
          <div className="demo-input-group">
            <label className="demo-label">Card Number</label>
            <input
              type="text"
              className="demo-input"
              placeholder="4242 4242 4242 4242"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim())}
              maxLength="19"
              required
            />
          </div>
          <div className="demo-input-row">
            <div className="demo-input-group">
              <label className="demo-label">Expiry Date</label>
              <input
                type="text"
                className="demo-input"
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => {
                  let input = e.target.value.replace(/\D/g, '');
                  if (input.length <= 4) {
                    if (input.length >= 2) {
                      setExpiry(input.slice(0, 2) + '/' + input.slice(2));
                    } else {
                      setExpiry(input);
                    }
                  }
                }}
                maxLength="5"
                required
              />
            </div>
            <div className="demo-input-group">
              <label className="demo-label">CVC</label>
              <input
                type="text"
                className="demo-input"
                placeholder="123"
                value={cvc}
                onChange={(e) => setCvc(e.target.value.replace(/\D/g, ''))}
                maxLength="3"
                required
              />
            </div>
          </div>
          <div className="test-card-info">
            <p><strong>Demo Mode:</strong> Use test card 4242 4242 4242 4242</p>
            <p>Any future date and any 3-digit CVC</p>
          </div>
        </>
      ) : (
        // Real Stripe Mode
        <>
          <div className="card-element-wrapper">
            <CardElement options={cardElementOptions} />
          </div>
          <div className="test-card-info">
            <p><strong>Test Card:</strong> 4242 4242 4242 4242</p>
            <p>Use any future date for expiry and any 3-digit CVC</p>
          </div>
        </>
      )}

      <div className="payment-summary">
        <div className="summary-row">
          <span>Total Amount:</span>
          <span className="amount">₹{total}</span>
        </div>
      </div>

      <button 
        type="submit" 
        className="btn-modern btn-modern-primary w-100"
        disabled={processing}
      >
        {processing ? (
          <>Processing...</>
        ) : (
          <>
            <FiCreditCard className="me-2" />
            Pay ₹{total}
          </>
        )}
      </button>
    </form>
  );
}

export default function Checkout({ total, cartItems, onClose, onSuccess }) {
  return (
    <div className="checkout-modal-overlay" onClick={onClose}>
      <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
        <button className="checkout-close" onClick={onClose}>×</button>
        <Elements stripe={stripePromise}>
          <CheckoutForm total={total} cartItems={cartItems} onSuccess={onSuccess} />
        </Elements>
      </div>
    </div>
  );
}
