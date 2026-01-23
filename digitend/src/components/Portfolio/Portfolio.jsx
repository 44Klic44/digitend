import styles from './Portfolio.module.scss';

import centralImg from '../../assets/Portfolio/central-img.png';

import img1 from '../../assets/Portfolio/unsplash_AHPjJe1a3CA.png';
import img2 from '../../assets/Portfolio/unsplash_eveI7MOcSmw.png';
import img3 from '../../assets/Portfolio/unsplash_fEedoypsW_U.png';
import img4 from '../../assets/Portfolio/unsplash_flRm0z3MEoA.png';
import img5 from '../../assets/Portfolio/unsplash_JKUTrJ4vK00.png';
import img6 from '../../assets/Portfolio/unsplash_pKRNxEguRgM.png';
import img7 from '../../assets/Portfolio/unsplash_qwtCeJ5cLYs.png';
import img8 from '../../assets/Portfolio/unsplash_sv8oOQaUb-o.png';
import img9 from '../../assets/Portfolio/img9.png';

import arrowIcon from '../../assets/icons/arrow-vhite.svg';

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.header}>
        <h2 className={styles.title}>Our Portfolio</h2>
        <p className={styles.description}>
       Discover how we transform ideas into impactful digital experiences
        </p>
      </div>

      {/* DESKTOP MOSAIC */}
      <div className={styles.mosaic}>
        <div className={`${styles.item} ${styles.leftTall}`}>
          <img src={img1} alt="" />
        </div>

        <div className={`${styles.item} ${styles.col2Top}`}>
          <img src={img2} alt="" />
        </div>

        <div className={`${styles.item} ${styles.col2Bottom}`}>
          <img src={img3} alt="" />
        </div>

        {/* CENTRAL LINK */}
        <a
          href="#"
          className={styles.central}
          style={{ backgroundImage: `url(${centralImg})` }}
        >
          <div className={styles.overlay}>
            <div>
              <h3>Website Dashboard Design</h3>
              <p>An interface that turns data into solutions.</p>
            </div>
            <img src={arrowIcon} alt="Go to portfolio" />
          </div>
        </a>

        <div className={`${styles.item} ${styles.col5}`}>
          <img src={img4} alt="" />
        </div>

        <div className={`${styles.item} ${styles.col6}`}>
          <img src={img5} alt="" />
        </div>

        <div className={`${styles.item} ${styles.bottomWide}`}>
          <img src={img6} alt="" />
        </div>

        <div className={`${styles.item} ${styles.bottomCenter}`}>
          <img src={img7} alt="" />
        </div>

        <div className={`${styles.item} ${styles.bottomRight}`}>
          <img src={img9} alt="" />
        </div>

        <div className={`${styles.item} ${styles.rightBig}`}>
          <img src={img8} alt="" />
        </div>
      </div>

      {/* MOBILE */}
      <div className={styles.mobile}>
        <a
          href="#"
          className={styles.mobileCentral}
          style={{ backgroundImage: `url(${centralImg})` }}
        >
          <div className={styles.overlay}>
            <div>
              <h3>Website Dashboard Design</h3>
              <p>An interface that turns data into solutions.</p>
            </div>
            <img src={arrowIcon} alt="Go to portfolio" />
          </div>
        </a>

        <div className={styles.mobileGrid}>
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          
        </div>
        
      </div>
    </section>
  );
};

export default Portfolio;
