import { useEffect, useState } from 'react';
import { Container } from '../../ui/Container/Container';
import styles from './Header.module.scss';
import menuIcon from '../../assets/icons/menu-line.svg';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          {/* Burger */}
          <button
            className={styles.burger}
            onClick={() => setIsOpen(true)}
          >
            <img src={menuIcon} alt="Menu" />
          </button>

          <div className={styles.logo}>DIGITREND</div>

          {/* DESKTOP NAV */}
          <nav className={styles.nav}>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#portfolio">Portfolio</a>
          </nav>

          <button className={styles.button}>Contact US</button>
        </div>
      </Container>

      {/* FULLSCREEN MOBILE MENU */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
        <button className={styles.close} onClick={closeMenu}>
          ✕
        </button>

        <nav className={styles.mobileNav}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About Us</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#pricing" onClick={closeMenu}>Pricing</a>
          <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
        </nav>
      </div>
    </header>
  );
};
