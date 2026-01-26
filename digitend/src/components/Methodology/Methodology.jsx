import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Methodology.module.scss';
import playIcon from '../../assets/icons/play-large-fill.svg';
import videoPreloader from '../../assets/Methodology/metodology-video-preloader.png';
import { FormPopup } from '../../components/Modal/FormPopup'; 


const ModalPortal = ({ children }) => {
  const [modalRoot, setModalRoot] = useState(null);
 

  useEffect(() => {
    const div = document.createElement('div');
    div.id = 'modal-root';
    document.body.appendChild(div);
    setModalRoot(div);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
      if (div.parentNode) {
        div.parentNode.removeChild(div);
      }
    };
  }, []);

  if (!modalRoot) return null;

  return ReactDOM.createPortal(children, modalRoot);
};

const Methodology = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
   const [isFormOpen, setIsFormOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const videoId = "qYOCbbpl4LY";

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isModalOpen]);


  return (
    <>
      <section className={styles.methodology}>
        <div className={styles.container}>
          {/* Контент с текстом */}
          <div className={styles.content}>
            <h1 className={styles.title}>
              Crafting Digital Brilliance Explore Our Methodology
            </h1>
          
            <p className={styles.description}>
              Our proven methodology combines strategic planning with cutting-edge technology to transform your digital vision into reality.
            </p>
          </div>

          {/* Видео блок */}
          <div className={styles.videoSection}>
            <div className={styles.videoWrapper} onClick={openModal}>
              <div 
                className={styles.videoPlaceholder}
                style={{ backgroundImage: `url(${videoPreloader})` }}
              >
                <div className={styles.playButton}>
                  <img src={playIcon} alt="Play video" />
                </div>
              </div>
            </div>
          </div>

          {/* Кнопка - отдельный элемент */}
          <div className={styles.buttonContainer}>
            <button className={styles.contactButton}  onClick={() => setIsFormOpen(true)}>
              CONTACT US
            </button>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <ModalPortal>
          <div className={styles.modalOverlay} onClick={closeModal}>
            <button className={styles.closeButton} onClick={closeModal}>
              &times;
            </button>
            
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <div className={styles.videoContainer}>
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                  title="What Does a Digital Marketer Do?"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
   
        </ModalPortal>
      )}

       <FormPopup
  isOpen={isFormOpen}
  onClose={() => setIsFormOpen(false)}
/>
      
    </>
  );
};

export default Methodology;