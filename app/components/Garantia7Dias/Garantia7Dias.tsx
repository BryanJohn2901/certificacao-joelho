'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";
import { FaShieldAlt, FaCheck } from 'react-icons/fa';
import styles from "./Garantia7Dias.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Garantia7Dias() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -60, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 60 },
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.wrapper} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.left} ref={leftRef}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageGlow}></div>
            <Image
              src="/07-DIAS-02.webp"
              alt="07 dias de garantia"
              width={650}
              height={380}
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.right} ref={rightRef}>
          <div className={styles.badge}>
            <FaShieldAlt /> GARANTIA INCONDICIONAL
          </div>
          <h3 className={styles.titleRight}>
            Satisfação garantida ou o seu <span className={styles.highlight}>dinheiro de volta</span>
          </h3>
          <p className={styles.text}>
            Você adquire agora o acesso completo ao Expertise em Joelho pela condição especial de R$ 47,00 e tem 7 dias para avaliar.
          </p>
          <p className={styles.text}>
            Se por algum motivo você achar que este material não é pra você, ou que não vale o investimento, basta me enviar uma mensagem que devolvo integralmente seu dinheiro. Agora a decisão de começar é sua!
          </p>

          <ul className={styles.garantiaList}>
            <li><FaCheck className={styles.garantiaIcon} /> Reembolso total em até 7 dias</li>
            <li><FaCheck className={styles.garantiaIcon} /> Sem burocracia</li>
            <li><FaCheck className={styles.garantiaIcon} /> Satisfação garantida</li>
          </ul>

          <a href="#checkout" className={`btn-premium ${styles.btn}`}>
            <span>Sim! Quero a Certificação!</span>
          </a>
        </div>
      </div>
    </section>
  );
}
