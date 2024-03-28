import React from 'react';
import styles from '/src/Styles/Section.module.css';
import { Image } from 'react-bootstrap';
import Intro from '../Intro/Intro';

const Section = () => {
  return (
    <>
      <div id="section1" className={styles.section1}>
        <Image src="./images/9.1.jpg" alt="Imagen" className={styles.imgSection} />
        <Image src="./images/corona.png" className={styles.logoImg} alt="Logo" />
        <Image src="./images/Logo_RR.png" className={styles.textoImg} alt="Logotipo" />
      </div>
      <Intro id="intro"/>
    </>
  );
};

export default Section;
