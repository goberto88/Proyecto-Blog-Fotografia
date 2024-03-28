import React, { useState } from "react";
import styles from "/src/Styles/NavigationBar.module.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar
        expand="lg"
        expanded={open}
        onToggle={() => setOpen(!open)}
        className={`${styles.containerNavBar} fixed-top`}
      >
        <Container bsPrefix={styles.container}>
          <Link to={"/"}>
            <img
              className={styles.logo}
              src="./images/Logo-Roberto.jpg"
              alt="logo"
            />
          </Link>

          <Navbar.Toggle bsPrefix={`${styles.toggleButton}`}>
            <span className={styles.menuIcon}>☰</span>
          </Navbar.Toggle>

          <Navbar.Collapse className={styles.menuContainer}>
            <Nav className={`${styles.containerNavItem} ms-auto`}>
              <Link
                to={"/"}
                className={styles.navLink}
                onClick={() => setOpen(false)}
              >
                <Nav.Item href="#intro">Inicio</Nav.Item>
              </Link>
              <Link
                to={"/Galeria"}
                className={styles.navLink}
                onClick={() => setOpen(false)}
              >
                <Nav.Item>Galeria</Nav.Item>
              </Link>
              <Link
                to={"Contactos"}
                className={styles.navLink}
                onClick={() => setOpen(false)}
              >
                <Nav.Item>Contactanos</Nav.Item>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
