import { Container } from '../../ui/Container/Container';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.logo}>DIGITREND</div>

          <nav className={styles.nav}>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Pricing</a>
            <a href="#">Portfolio</a>
          </nav>

          <button className={styles.button}>Contact Us</button>
        </div>
      </Container>
    </header>
  );
};