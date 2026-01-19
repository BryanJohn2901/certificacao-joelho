'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import styles from './DepoimentosCarrossel.module.css';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const depoimentos = [
  {
    nome: 'Lucas Mendes',
    cargo: 'Preparador Físico',
    destaque: 'Conteúdo de alto nível!',
    texto:
      'O curso é extremamente completo e com um embasamento científico impecável. Aprendi estratégias avançadas que me ajudaram a melhorar o desempenho dos meus atletas e prevenir lesões. Sem dúvida, um investimento que vale cada centavo!',
    foto: '/avatar01.webp',
    rating: 5,
  },
  {
    nome: 'Rafael Souza',
    cargo: 'Personal Trainer',
    destaque: 'Um divisor de águas na minha carreira!',
    texto:
      'A certificação Expertise em Joelho transformou minha forma de entender e aplicar os conhecimentos sobre biomecânica e reabilitação. Meus alunos notaram a diferença nos treinos e a taxa de recuperação de lesões melhorou significativamente.',
    foto: '/avatar02.webp',
    rating: 5,
  },
  {
    nome: 'Camila Ferreira',
    cargo: 'Especialista em Treinamento Funcional',
    destaque: 'A melhor decisão que já tomei!',
    texto:
      'Sempre tive dúvidas sobre como lidar com dores no joelho de meus clientes, mas essa certificação me deu segurança e embasamento técnico para criar treinos mais eficazes e seguros. Agora, sou referência na minha região!',
    foto: '/avatar03.webp',
    rating: 5,
  },
];

export default function DepoimentosCarrossel() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.wrapper} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.title} ref={titleRef}>
          Veja o que <span className={styles.titleHighlight}>profissionais</span> estão dizendo
        </h2>
        <p className={styles.subtitle}>
          Quem garantiu a certificação saiu na frente de 78% do mercado Fitness
        </p>

        <div className={styles.swiperContainer}>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className={styles.swiper}
          >
            {depoimentos.map((d, index) => (
              <SwiperSlide key={index}>
                <div className={styles.card}>
                  <FaQuoteLeft className={styles.quoteIcon} />
                  <div className={styles.rating}>
                    {[...Array(d.rating)].map((_, i) => (
                      <FaStar key={i} className={styles.star} />
                    ))}
                  </div>
                  <p className={styles.destaque}>{d.destaque}</p>
                  <p className={styles.texto}>{d.texto}</p>
                  <div className={styles.header}>
                    <Image
                      src={d.foto}
                      alt={d.nome}
                      width={48}
                      height={48}
                      className={styles.avatar}
                    />
                    <div className={styles.info}>
                      <strong className={styles.nome}>{d.nome}</strong>
                      <span className={styles.cargo}>{d.cargo}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
