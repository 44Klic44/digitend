import { Container } from '../../ui/Container/Container';
import styles from './Footer.module.scss';

import { FaLinkedinIn, FaInstagram, FaBehance } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          
          {/* Лого и описание */}
          <div className={styles.brand}>
            <h3 className={styles.logo}>DIGITREND</h3>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed ornare cursus sed nunc eget dictum.
            </p>

            <div className={styles.socials}>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaXTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaBehance /></a>
            </div>
          </div>

          {/* Services */}
          <div className={styles.column}>
            <h4>Services</h4>
            <ul>
              <li><a href="#">SEO</a></li>
              <li><a href="#">Email Marketing</a></li>
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Content Writing</a></li>
            </ul>
          </div>

          {/* Packages */}
          <div className={styles.column}>
            <h4>Packages</h4>
            <ul>
              <li><a href="#">Basic</a></li>
              <li><a href="#">Premium</a></li>
              <li><a href="#">Diamond</a></li>
              <li><a href="#">Platinum</a></li>
            </ul>
          </div>

          {/* About */}
          <div className={styles.column}>
            <h4>About</h4>
            <ul>
              <li><a href="#">Digital Agency</a></li>
              <li><a href="#">Explore</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>

        </div>
      </Container>
    </footer>
  );
};
