'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";
import { FaAward, FaBook, FaUsers, FaPlay } from 'react-icons/fa';
import styles from "./AndreAlbuquerque.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function AndreAlbuquerque() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 60, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      const statItems = statsRef.current?.querySelectorAll(`.${styles.stat}`);
      if (statItems) {
        gsap.fromTo(
          statItems,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.backgroundGlow}></div>
      <div className={styles.container}>
        <div className={styles.text} ref={textRef}>
          <div className={styles.badge}>
            <FaAward /> ESPECIALISTA
          </div>
          <h2 className={styles.title}>
            Quem é <span className={styles.titleHighlight}>André Albuquerque?</span>
          </h2>
          <p>
            Professor de Educação física e Mestre em Biomecânica, André Albuquerque conecta com mais de 200 mil pessoas em suas redes sociais, onde compartilha conhecimento e experiências. Com mais de 23 mil alunos formados, André é professor e palestrante, dedicando sua carreira a ensinar a Biomecânica na prática através da educação física, com base em arquivos científicos.
          </p>
          <p>
            Coordenador da Pós-graduação em Biomecânica, Musculação e Reabilitação Musculoesquelética. Autor dos livros &quot;Biomecânica Aplicada à Reabilitação de Lesões&quot; e &quot;Biomecânica Prática no Exercício Físico&quot;, André possui mais de 14 anos de experiência empreendendo. Atualmente, é CEO da Personal Trainer Academy.
          </p>

          <div className={styles.stats} ref={statsRef}>
            <div className={styles.stat}>
              <FaUsers className={styles.statIcon} />
              <div className={styles.statInfo}>
                <span className={styles.statNumber}>200k+</span>
                <span className={styles.statLabel}>Seguidores</span>
              </div>
            </div>
            <div className={styles.stat}>
              <FaAward className={styles.statIcon} />
              <div className={styles.statInfo}>
                <span className={styles.statNumber}>23k+</span>
                <span className={styles.statLabel}>Alunos formados</span>
              </div>
            </div>
            <div className={styles.stat}>
              <FaBook className={styles.statIcon} />
              <div className={styles.statInfo}>
                <span className={styles.statNumber}>14+</span>
                <span className={styles.statLabel}>Anos de experiência</span>
              </div>
            </div>
          </div>

          <a href="#checkout" className={`btn-premium ${styles.button}`}>
            <FaPlay className={styles.btnIcon} />
            <span>QUERO EXPERIMENTAR AGORA</span>
          </a>
        </div>

        <div className={styles.imageWrapper} ref={imageRef}>
          <div className={styles.imageGlow}></div>
          <div className={styles.imageBorder}>
            <Image
              src="/andre.webp"
              alt="Foto de André Albuquerque"
              width={500}
              height={600}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
