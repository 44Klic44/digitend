import { Container } from '../../ui/Container/Container';
import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1>Your Trusted Digital Agency Partner</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Semper a interdum
              purus velit ullamcorper.
            </p>

            <div className={styles.actions}>
              <button className={styles.primary}>Get Started</button>
              <button className={styles.secondary}>Explore More</button>
            </div>
          </div>

          <img
            src="/hero.png"
            alt="Hero illustration"
            className={styles.image}
          />
        </div>
      </Container>
    </section>
  );
};