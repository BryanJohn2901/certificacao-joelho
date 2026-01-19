'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.css';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 80, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2 }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.7'
        )
        .fromTo(
          videoRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 1 },
          '-=0.5'
        )
        .fromTo(
          buttonRef.current,
          { opacity: 0, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'back.out(1.5)' },
          '-=0.4'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="hero-overlay"></div>
      <div className="hero-particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="hero-content">
        <h1 className="hero-title" ref={titleRef}>
          <span className="hero-title-line">DESCUBRA O SEGREDO QUE OS MELHORES</span>
          <span className="hero-title-highlight">PERSONAL TRAINERS UTILIZAM PARA PREVENIR LESÕES DE JOELHO!</span>
        </h1>
        <p className="hero-subtitle" ref={subtitleRef}>
          Aprenda a Prescrever Exercícios com Segurança e Resolver Dores Crônicas
        </p>

        <div className="hero-video" ref={videoRef}>
          <div className="hero-video-glow"></div>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/70qvhAF8oqQ"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="hero-button-container" ref={buttonRef}>
          <a href="#checkout" className="btn-premium hero-button">
            <span>QUERO PREVENIR LESÕES NOS MEUS ALUNOS</span>
            <span className="hero-button-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
