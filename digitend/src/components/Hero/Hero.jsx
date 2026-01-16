import { Container } from '../../ui/Container/Container';
import styles from './Hero.module.scss';
import heroImage from '../../assets/header/amico (1).png';

export const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <Container>
        <div className={styles.inner}>
          {/* TEXT */}
          <div className={styles.content}>
            <h1>
              Your Trusted Digital <span>Agency</span> Partner
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur. Semper a interdum
              purus velit ullamcorper.
            </p>

            <div className={styles.actions}>
              <button className={styles.primary}>Get Started</button>
              <button className={styles.secondary}>Explore More</button>
            </div>
          </div>

          {/* IMAGE */}
          <div className={styles.imageWrap}>
            <img src={heroImage} alt="Digital Agency" />
          </div>
        </div>
      </Container>
    </section>
  );
};
