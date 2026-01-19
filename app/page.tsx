'use client';

import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Certificacao from './components/Certificacao/Certificacao';
import DepoimentosCarrossel from "./components/DepoimentosCarrossel/DepoimentosCarrossel";
import OQueAprender from "./components/OQueAprender/OQueAprender";
import AndreAlbuquerque from "./components/AndreAlbuquerque/AndreAlbuquerque";
import OfertaLimitada from "./components/OfertaLimitada/OfertaLimitada";
import Garantia7Dias from "./components/Garantia7Dias/Garantia7Dias";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import styles from './page.module.css';

export default function HomePage() {
  const scrollToCheckout = () => {
    const checkout = document.getElementById('checkout');
    if (checkout) {
      checkout.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className={styles.main}>
      <Navbar onScrollToCheckout={scrollToCheckout} />
      <Hero />
      <Certificacao />
      <DepoimentosCarrossel />
      <OQueAprender />
      <AndreAlbuquerque />
      <OfertaLimitada />
      <Garantia7Dias />
      <Faq />
      <Footer />
    </main>
  );
}
