'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';
import './Faq.css';

gsap.registerPlugin(ScrollTrigger);

const perguntasERespostas = [
  {
    pergunta: 'Para quem é essa certificação?',
    resposta:
      'Essa certificação é ideal para personal trainer, educadores físicos e outros profissionais da saúde que desejam se especializar na prevenção de lesões e dores no joelho, elevando sua autoridade e melhorando os resultados dos seus pacientes.',
  },
  {
    pergunta: 'Preciso ter formação na área da saúde para participar?',
    resposta:
      'Sim, essa certificação é voltada para profissionais que já possuem formação na área da saúde e desejam aprofundar seus conhecimentos sobre a reabilitação e prevenção de lesões no joelho.',
  },
  {
    pergunta: 'A certificação é reconhecida?',
    resposta:
      'Sim, ao concluir a certificação, você receberá um certificado válido, que pode ser utilizado para comprovar sua especialização e agregar valor ao seu currículo.',
  },
  {
    pergunta: 'O curso é 100% online ou tem aulas presenciais?',
    resposta:
      'A certificação é totalmente online, permitindo que você estude no seu ritmo, de qualquer lugar, sem precisar interromper sua rotina de atendimentos.',
  },
  {
    pergunta: 'Quanto tempo dura a certificação?',
    resposta:
      'O tempo pode variar de acordo com a sua disponibilidade, mas a maioria dos alunos conclui a certificação entre 1 e 2 semanas.',
  },
  {
    pergunta: 'Como posso me inscrever?',
    resposta:
      'Basta clicar no botão de inscrição nesta página, preencher seus dados e garantir sua vaga. Após a confirmação do pagamento, você terá acesso imediato à plataforma.',
  },
];

const Faq: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

      const items = listRef.current?.querySelectorAll('.faq-item');
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: listRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" ref={sectionRef}>
      <h2 className="faq-title" ref={titleRef}>
        <FaQuestionCircle className="faq-title-icon" />
        Perguntas <span className="faq-title-highlight">frequentes</span>
      </h2>

      <div className="faq-lista" ref={listRef}>
        {perguntasERespostas.map((item, index) => (
          <div 
            className={`faq-item ${openIndex === index ? 'faq-item-active' : ''}`} 
            key={index}
            onClick={() => toggleQuestion(index)}
          >
            <div className="faq-header">
              <h3 className="faq-pergunta">{item.pergunta}</h3>
              <FaChevronDown className={`faq-icon ${openIndex === index ? 'faq-icon-active' : ''}`} />
            </div>
            <div className={`faq-resposta-wrapper ${openIndex === index ? 'faq-resposta-open' : ''}`}>
              <p className="faq-resposta">{item.resposta}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
