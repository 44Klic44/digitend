import React, { useState } from 'react';
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

import arrowIcon from '../../assets/icons/Vector.svg';

const images = [
  img1, img2, img3, img4,
  img5, img6, img7, img8
];

const Portfolio = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className={styles.portfolio}>
        {/* HEADER — как в других блоках */}
        <div className={styles.header}>
          <h2 className={styles.title}>Our Portfolio</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur. Semper a interdum purus velit ullamcorper.
          </p>
        </div>

        {/* FULL WIDTH MOSAIC */}
        <div className={styles.mosaic}>
          {/* CENTRAL */}
          <div
            className={styles.central}
            style={{ backgroundImage: `url(${centralImg})` }}
            onClick={() => setOpen(true)}
          >
            <div className={styles.overlay}>
              <div>
                <h3>Website Dashboard Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Semper a interdum p</p>
              </div>
              <img src={arrowIcon} alt="Open gallery" />
            </div>
          </div>

          {/* OTHER IMAGES */}
          {images.map((img, i) => (
            <div key={i} className={styles.item}>
              <img src={img} alt="" />
            </div>
          ))}
        </div>
      </section>

      {/* SLIDER */}
      {open && (
        <div className={styles.sliderOverlay} onClick={() => setOpen(false)}>
          <div className={styles.slider} onClick={e => e.stopPropagation()}>
            {images.map((img, i) => (
              <img key={i} src={img} alt="" />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
