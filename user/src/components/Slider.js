import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import '../css/slider.css';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      title: "Welcome to Shop-Swift",
      subtitle: "Your One-Stop Shopping Destination",
      description: "Discover amazing products at unbeatable prices",
      bgColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      image: "🛍️",
      link: "/products"
    },
    {
      id: 2,
      title: "Fresh Arrivals Daily",
      subtitle: "New Products Every Week",
      description: "Stay updated with the latest trends and products",
      bgColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      image: "🎁",
      link: "/products"
    },
    {
      id: 3,
      title: "Best Deals & Offers",
      subtitle: "Save More on Every Purchase",
      description: "Exclusive discounts and special offers just for you",
      bgColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      image: "💰",
      link: "/products"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ background: slide.bgColor }}
          >
            <div className="container">
              <div className="slide-content">
                <div className="slide-text">
                  <div className="slide-emoji">{slide.image}</div>
                  <h1 className="slide-title">{slide.title}</h1>
                  <h2 className="slide-subtitle">{slide.subtitle}</h2>
                  <p className="slide-description">{slide.description}</p>
                  <button 
                    className="slide-cta"
                    onClick={() => navigate(slide.link)}
                  >
                    Shop Now
                    <FiChevronRight className="ms-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="slider-nav slider-prev" onClick={prevSlide}>
        <FiChevronLeft size={24} />
      </button>
      <button className="slider-nav slider-next" onClick={nextSlide}>
        <FiChevronRight size={24} />
      </button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
