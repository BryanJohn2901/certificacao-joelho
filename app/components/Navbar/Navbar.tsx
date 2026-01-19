'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Navbar.css';

interface NavbarProps {
  onScrollToCheckout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onScrollToCheckout }) => {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
    );

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`} ref={navRef}>
      <div className="navbar-container">
        <img
          src="/logo.webp"
          alt="Logo Expertise em Joelho"
          className="navbar-logo"
        />
        <button onClick={onScrollToCheckout} className="btn-premium navbar-button">
          <span>Começar agora</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
