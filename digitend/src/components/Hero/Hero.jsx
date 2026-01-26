import { Container } from '../../ui/Container/Container';
import styles from './Hero.module.scss';
import heroImage from '../../assets/header/amico (1).png';
import { FormPopup } from '../Modal/FormPopup';
import { useState } from 'react';


export const Hero = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className={styles.hero} id="home">
      <Container>
        <div className={styles.inner}>
          {/* Текстовая часть с кнопками для десктопа */}
          <div className={styles.content}>
            <div className={styles.textContent}>
              <h1>
                Your Trusted Digital <span>Agency</span> Partner
              </h1>

              <p className={styles.herodesc}>
                We create innovative digital solutions that drive growth and enhance your online presence.
              </p>
            </div>
            
            {/* Кнопки для десктопа */}
            <div className={`${styles.actions} ${styles.desktopActions}`}>
              <button className={styles.primary}  onClick={() => setIsFormOpen(true)}>Get Started</button>
              <button className={styles.secondary}  onClick={() => setIsFormOpen(true)}>Explore More</button>
            </div>
          </div>

          {/* Картинка */}
          <div className={styles.imageWrap}>
            <img src={heroImage} alt="Digital Agency" />
          </div>

          {/* Кнопки для мобилки */}
          <div className={`${styles.actions} ${styles.mobileActions}`}>
            <button className={styles.primary}  onClick={() => setIsFormOpen(true)}>Get Started</button>
            <button className={styles.secondary}  onClick={() => setIsFormOpen(true)}>Explore More</button>
          </div>
        </div>
      </Container>

<FormPopup
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </section>

    
    
  );
};