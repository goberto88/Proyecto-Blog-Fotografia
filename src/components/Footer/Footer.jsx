import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "/src/Styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={`${styles.container} fixed-bottom`}>
    <footer className={styles.footer}>
      <Container>
        <Row className={styles.row}>
          <Col className={styles.col}>
            <a href="https://www.instagram.com/goberto66">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${styles.icon} icon icon-tabler icon-tabler-brand-instagram`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M16.5 7.5l0 .01" />
            </svg>
            </a>
            <a href="https://github.com/goberto88">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${styles.icon} icon icon-tabler icon-tabler-brand-git-hub`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          
            </a>
            <a href="https://www.linkedin.com/in/roberto-rivas-arteaga">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${styles.icon} icon icon-tabler icon-tabler-brand-linkedine`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M8 11l0 5" />
              <path d="M8 8l0 .01" />
              <path d="M12 16l0 -5" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
            </a>
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col>
            <p className={styles.copy}>© 2024 Roberto Rivas A.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  );
};

export default Footer;
