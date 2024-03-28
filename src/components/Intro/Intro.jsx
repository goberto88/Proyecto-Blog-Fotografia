import React from 'react'
import {Image } from 'react-bootstrap';
import styles from '/src/Styles/Intro.module.css';

const Intro = () => {
  return (
    <>
        <section >
      <div className={styles.introContainer}>
        
          
            <article className={styles.intro}> 
              <p>
                <span className={styles.introFirstLetter}>B</span>ienvenidos a un espacio donde el ojo se convierte en pluma y la luz en tinta, donde la realidad se
                desdobla en múltiples realidades, en el mágico y enigmático universo de la fotografía amateur.
              </p>
              <br/>
              <p>
                En el crisol de la realidad y la imaginación, donde la luz y la sombra danzan en una danza eterna,
                se encuentra el humilde refugio de un fotógrafo amateur. En este rincón de la percepción, las
                imágenes se tejen con hilos de tiempo y memoria, como los laberintos inextricables que habitaban en
                los relatos de Borges. Cada captura es una encrucijada, un momento efímero que se convierte en
                eterno, una ventana hacia la infinitud de posibilidades que la lente del artista puede esculpir.
                Así, en este mundo de instantes congelados, el fotógrafo se convierte en un cuentista, narrando
                historias silenciosas a través de la mirada y el encuadre.
              </p>
            </article>
          
          <Image src="./images/articulo.jpg" alt="Artículo" fluid className={styles.introImage}/>
      
      </div>
    </section>
    </>
  )
}

export default Intro