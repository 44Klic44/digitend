import { Container } from '../../ui/Container/Container';
import styles from './Footer.module.scss';
import { useState } from 'react';
import { FaLinkedinIn, FaInstagram, FaBehance, FaChevronDown } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const Footer = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          
          {/* Лого и описание */}
          <div className={styles.brand}>
            <h3 className={styles.logo}>DIGITREND</h3>
            <p className={styles.desc}>
              Digitend is the intersection of technology and design. We craft digital solutions that not only function but inspire. From concept to execution, our goal is clarity, efficiency, and elegance in every detail.
            </p>

            <div className={styles.socials}>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaXTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaBehance /></a>
            </div>
          </div>

          {/* Services - Desktop: обычная колонка, Mobile: аккордеон */}
          <div className={styles.column}>
            <h4 className={styles.desktopTitle}>Services</h4>
            
            {/* Desktop version */}
            <ul className={styles.desktopList}>
              <li><a href="#">SEO</a></li>
              <li><a href="#">Email Marketing</a></li>
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Content Writing</a></li>
            </ul>
            
            {/* Mobile Accordion */}
            <div className={styles.mobileAccordion}>
              <button 
                className={styles.accordionHeader}
                onClick={() => toggleAccordion('services')}
                aria-expanded={openAccordion === 'services'}
              >
                <h4>Services</h4>
                <FaChevronDown className={`${styles.chevron} ${openAccordion === 'services' ? styles.rotated : ''}`} />
              </button>
              <div className={`${styles.accordionContent} ${openAccordion === 'services' ? styles.open : ''}`}>
                <ul className={styles.mobileList}>
                  <li><a href="#">SEO</a></li>
                  <li><a href="#">Email Marketing</a></li>
                  <li><a href="#">Digital Marketing</a></li>
                  <li><a href="#">Content Writing</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Packages - Desktop: обычная колонка, Mobile: аккордеон */}
          <div className={styles.column}>
            <h4 className={styles.desktopTitle}>Packages</h4>
            
            {/* Desktop version */}
            <ul className={styles.desktopList}>
              <li><a href="#">Basic</a></li>
              <li><a href="#">Premium</a></li>
              <li><a href="#">Diamond</a></li>
              <li><a href="#">Platinum</a></li>
            </ul>
            
            {/* Mobile Accordion */}
            <div className={styles.mobileAccordion}>
              <button 
                className={styles.accordionHeader}
                onClick={() => toggleAccordion('packages')}
                aria-expanded={openAccordion === 'packages'}
              >
                <h4>Packages</h4>
                <FaChevronDown className={`${styles.chevron} ${openAccordion === 'packages' ? styles.rotated : ''}`} />
              </button>
              <div className={`${styles.accordionContent} ${openAccordion === 'packages' ? styles.open : ''}`}>
                <ul className={styles.mobileList}>
                  <li><a href="#">Basic</a></li>
                  <li><a href="#">Premium</a></li>
                  <li><a href="#">Diamond</a></li>
                  <li><a href="#">Platinum</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* About - Desktop: обычная колонка, Mobile: аккордеон */}
          <div className={styles.column}>
            <h4 className={styles.desktopTitle}>About</h4>
            
            {/* Desktop version */}
            <ul className={styles.desktopList}>
              <li><a href="#">Digital Agency</a></li>
              <li><a href="#">Explore</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Career</a></li>
            </ul>
            
            {/* Mobile Accordion */}
            <div className={styles.mobileAccordion}>
              <button 
                className={styles.accordionHeader}
                onClick={() => toggleAccordion('about')}
                aria-expanded={openAccordion === 'about'}
              >
                <h4>About</h4>
                <FaChevronDown className={`${styles.chevron} ${openAccordion === 'about' ? styles.rotated : ''}`} />
              </button>
              <div className={`${styles.accordionContent} ${openAccordion === 'about' ? styles.open : ''}`}>
                <ul className={styles.mobileList}>
                  <li><a href="#">Digital Agency</a></li>
                  <li><a href="#">Explore</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Career</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </footer>
  );
};