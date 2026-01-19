'use client';

import React from 'react';
import { FaInstagram, FaYoutube, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top-border"></div>
      <div className="footer-container">
        <div className="footer-logo-section">
          <img src="/logo.webp" alt="Personal Trainer Academy" className="footer-logo" />
          <p className="footer-tagline">Transformando profissionais em referências</p>
        </div>

        <div className="footer-social">
          <a href="#" className="footer-social-link" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" className="footer-social-link" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>

        <div className="footer-copy-section">
          <p className="footer-text">
            © 2024 Personal Trainer Academy. Todos os direitos reservados.
          </p>
          <p className="footer-made-with">
            Feito com <FaHeart className="footer-heart" /> para transformar carreiras
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
