'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Certificacao.css';

gsap.registerPlugin(ScrollTrigger);

const Certificacao: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      const items = itemsRef.current?.querySelectorAll('.certificacao-item');
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, x: 60, scale: 0.95 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: itemsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="certificacao-section" ref={sectionRef}>
      <div className="certificacao-container">
        <div className="certificacao-textos" ref={textRef}>
          <h2>
            A certificação que vai <span className="text-highlight">transformar</span> sua abordagem
          </h2>
          <p className="certificacao-subtitle">No tratamento do joelho e elevar sua autoridade profissional!</p>
          <p>
            Muitos profissionais enfrentam dificuldades para se destacar na área e acabam
            perdendo oportunidades porque:
          </p>
        </div>

        <div className="certificacao-itens" ref={itemsRef}>
          <div className="certificacao-item">
            <div className="check-icon-wrapper">
              <span className="check-icon">✔</span>
            </div>
            <p>Não possuem uma certificação especializada que comprove sua autoridade</p>
          </div>
          <div className="certificacao-item">
            <div className="check-icon-wrapper">
              <span className="check-icon">✔</span>
            </div>
            <p>Se sentem inseguros ao tratar casos complexos de dor no joelho</p>
          </div>
          <div className="certificacao-item">
            <div className="check-icon-wrapper">
              <span className="check-icon">✔</span>
            </div>
            <p>Encontram informações desencontradas e não sabem qual abordagem seguir</p>
          </div>
          <div className="certificacao-item">
            <div className="check-icon-wrapper">
              <span className="check-icon">✔</span>
            </div>
            <p>Não conseguem atrair mais pacientes e aumentar sua renda com atendimentos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificacao;
