'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCheckCircle, FaGift } from 'react-icons/fa';
import styles from "./OQueAprender.module.css";

gsap.registerPlugin(ScrollTrigger);

const itens = [
  {
    titulo: "HIP CORE:",
    texto:
      "O grande responsável pela saúde do joelho, fortalecendo a região do quadril e proporcionando maior estabilidade nos movimentos.",
  },
  {
    titulo: "Biomecânica do Agachamento paralelo",
    texto:
      "Exercício clássico que ativa toda a musculatura das pernas e glúteos, garantindo força e estabilidade articular.",
  },
  {
    titulo: "Biomecânica do Agachamento sumo",
    texto:
      "Com uma base mais ampla, esse agachamento enfatiza o trabalho dos adutores e glúteos, além de melhorar a mobilidade do quadril.",
  },
  {
    titulo: "Biomecânica do Agachamento com os pés juntos",
    texto:
      "Foca no quadríceps e exige maior equilíbrio, sendo ideal para aprimorar o controle motor e fortalecer os joelhos.",
  },
  {
    titulo: "Biomecânica do Agachamento búlgaro",
    texto:
      "Variante unilateral que melhora força, equilíbrio e coordenação, reduzindo desequilíbrios musculares entre as pernas.",
  },
  {
    titulo: "Biomecânica do Afundo",
    texto:
      "Exercício fundamental para o fortalecimento de pernas e glúteos, promovendo maior estabilidade e resistência muscular.",
  },
  {
    titulo: "Biomecânica do Stiff",
    texto:
      "Movimentação essencial para o fortalecimento dos isquiotibiais e glúteos, além de trabalhar a mobilidade da cadeia posterior.",
  },
];

export default function OQueAprender() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      const cards = gridRef.current?.querySelectorAll(`.${styles.card}`);
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
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
    <section className={styles.wrapper} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.title} ref={titleRef}>
          O que você vai <span className={styles.titleHighlight}>aprender</span>
        </h2>
        <div className={styles.grid} ref={gridRef}>
          {itens.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardNumber}>{String(i + 1).padStart(2, '0')}</div>
              <div className={styles.header}>
                <FaCheckCircle className={styles.check} />
                <h3 className={styles.cardTitle}>{item.titulo}</h3>
              </div>
              <p className={styles.cardText}>{item.texto}</p>
            </div>
          ))}

          <div className={`${styles.card} ${styles.bonus}`}>
            <div className={styles.bonusTag}>
              <FaGift /> BÔNUS EXCLUSIVO
            </div>
            <h3 className={styles.cardTitle}>+ Bônus</h3>
            <ul className={styles.bonusList}>
              <li>
                <FaCheckCircle className={styles.bonusCheck} />
                Testes biomecânicos para você compreender as dores no joelho
              </li>
              <li>
                <FaCheckCircle className={styles.bonusCheck} />
                MasterClass – análise biomecânica do joelho
              </li>
              <li>
                <FaCheckCircle className={styles.bonusCheck} />
                Livro digital &quot;Biomecânica do joelho&quot;
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
