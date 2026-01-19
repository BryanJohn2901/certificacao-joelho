'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";
import { FaCheckCircle, FaShieldAlt, FaClock } from 'react-icons/fa';
import styles from "./OfertaLimitada.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function OfertaLimitada() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      const button = cardRef.current?.querySelector(`.${styles.btn}`);
      if (button) {
        gsap.to(button, {
          boxShadow: '0 0 40px var(--primary-glow), 0 0 80px var(--accent-glow)',
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.wrapper} id="checkout" ref={sectionRef}>
      <div className={styles.backgroundGlow}></div>
      <div className={styles.container}>
        <h2 className={styles.title} ref={titleRef}>
          <FaClock className={styles.titleIcon} />
          <span>Atenção: condição por <strong>tempo limitado</strong></span>
        </h2>

        <div className={styles.card} ref={cardRef}>
          <div className={styles.cardGlow}></div>
          
          <div className={styles.logoWrapper}>
            <Image
              src="/iconelogo.webp"
              alt="Ícone da oferta"
              width={140}
              height={120}
            />
          </div>

          <div className={styles.ofertaTag}>
            <span>🔥 Oferta Especial</span>
          </div>

          <div className={styles.precoWrapper}>
            <p className={styles.priceFrom}>
              de <span>R$ 297,90</span> por apenas
            </p>
            <p className={styles.priceTo}>
              <span className={styles.moeda}>R$</span>
              <span className={styles.valor}>47</span>
              <span className={styles.centavos}>,00</span>
            </p>
          </div>

          <ul className={styles.lista}>
            <li className={styles.listItem}>
              <FaCheckCircle className={styles.listIcon} />
              <span>Expertise em Joelho Completo</span>
            </li>
            <li className={styles.listItem}>
              <FaCheckCircle className={styles.listIcon} />
              <span>100% Certificado</span>
            </li>
            <li className={styles.listItem}>
              <FaCheckCircle className={styles.listIcon} />
              <span>Bônus de Aquisição Exclusivo</span>
            </li>
          </ul>

          <p className={styles.parcelamento}>
            <FaShieldAlt className={styles.parcelaIcon} />
            Parcelamento em até <strong>10x no cartão</strong>.
          </p>

          <a href="#checkout" className={`btn-premium ${styles.btn}`}>
            <span>QUERO GARANTIR A OFERTA</span>
            <span className={styles.btnArrow}>→</span>
          </a>

          <div className={styles.pagamento}>
            <Image
              src="/pagamento.webp"
              alt="Formas de pagamento"
              width={180}
              height={45}
              className={styles.imgPagamento}
            />
            <span className={styles.seguro}>🔒 Compra 100% segura</span>
          </div>
        </div>
      </div>
    </section>
  );
}
