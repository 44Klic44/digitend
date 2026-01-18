import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Services.module.scss';
import arrowIcon from '../../assets/icons/Arrow.svg';

// Импортируем изображения карточек
import amicoImage from '../../assets/Services/amico.png';
import cuateImage from '../../assets/Services/cuate.png';
import rafikiImage from '../../assets/Services/rafiki.png';

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

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Digital Marketing',
      description: 'Lorem ipsum dolor sit amet consectetur. Semper a interdum purus velit ullamcorper. Lorem ipsum dolor sit',
      detailedTitle: 'Digital Marketing',
      detailedDescription: 'Полное описание Digital Marketing услуг. Lorem ipsum dolor sit amet consectetur. Semper a interdum purus velit ullamcorper. Lorem ipsum dolor sit amet consectetur. Semper a interdum purus velit ullamcorper. Lorem ipsum dolor sit amet consectetur. Semper a interdum purus velit ullamcorper. Lorem ipsum dolor sit amet consectetur. Semper a interdum purus velit ullamcorper.Полное описание Digital Marketing услуг. Lorem ipsum dolor sit amet consectetur. Semper a interdum purus velit ullamcorper. Lorem ipsum dolor sit amet consectetur. Semper a interdum purus velit ullamcorper. Lorem ipsum dolor sit amet consectetur. Semper a interdum purus velit ullamcorper. Lorem ipsum dolor sit amet consectetur. Semper a interdum purus velit ullamcorper.Полное описание Digital Marketing услуг. Lorem ipsum dolor sit amet consectetur. Semper a interdum purus velit ullamcorper. Lorem ipsum dolor sit amet consectetur. Semper a interdum purus velit ullamcorper. Lorem ipsum dolor sit amet consectetur. Semper a interdum purus velit ullamcorper. Lorem ipsum dolor sit amet consectetur. Semper a interdum purus velit ullamcorper.',
      image: amicoImage,
    },
    {
      id: 2,
      title: 'SEO Consultancy',
      description: 'Lorem ipsum dolor sit amet consectetur. Semper a interdum purus velit ullamcorper. Lorem ipsum dolor sit',
      detailedTitle: 'SEO Consultancy',
      detailedDescription: 'Полное описание SEO Consultancy услуг. Lorem ipsum dolor sit amet consectetur. Semper a interdum purus velit ullamcorper. Lorem ipsum dolor sit amet consectetur. Semper a interdum purus velit ullamcorper. Lorem ipsum dolor sit amet consectetur. Semper a interdum purus velit ullamcorper. Lorem ipsum dolor sit amet consectetur. Semper a interdum purus velit ullamcorper.',
      image: cuateImage,
    },
    {
      id: 3,
      title: 'Content Writing',
      description: 'Lorem ipsum dolor sit amet consectetur. Semper a interdum purus velit ullamcorper. Lorem ipsum dolor sit',
      detailedTitle: 'Content Writing',
      detailedDescription: 'Полное описание Content Writing услуг. Lorem ipsum dolor sit amet consectetur. Semper a interdum purus velit ullamcorper. Lorem ipsum dolor sit amet consectetur. Semper a interdum purus velit ullamcorper. Lorem ipsum dolor sit amet consectetur. Semper a interdum purus velit ullamcorper. Lorem ipsum dolor sit amet consectetur. Semper a interdum purus velit ullamcorper.',
      image: rafikiImage,
    },
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setActiveModal(service.id);
  };

  const closeModal = () => {
    setSelectedService(null);
    setActiveModal(null);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };

    if (activeModal) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [activeModal]);

  return (
    <>
      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Our Services</h1>
            <p className={styles.subtitle}>
              Lorem ipsum dolor sit amet consectetur. Semper a interdum purus velit ullamcorper.
            </p>
          </div>

          <div className={styles.cards}>
            {services.map((service) => (
              <div 
                key={service.id} 
                className={styles.card}
                onClick={() => openModal(service)}
                onMouseEnter={(e) => e.currentTarget.classList.add(styles.hovered)}
                onMouseLeave={(e) => e.currentTarget.classList.remove(styles.hovered)}
              >
                <div className={styles.cardImage}>
                  <img src={service.image} alt={service.title} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDescription}>{service.description}</p>
                  <div className={styles.exploreButton}>
                    Explore
                    <img src={arrowIcon} alt="Arrow" className={styles.arrowIcon} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Модальное окно для услуги */}
      {activeModal && selectedService && (
        <ModalPortal>
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>{selectedService.detailedTitle}</h2>
                <button className={styles.modalCloseButton} onClick={closeModal}>
                  &times;
                </button>
              </div>
              
              <div className={styles.modalBody}>
                <div className={styles.modalImage}>
                  <img src={selectedService.image} alt={selectedService.title} />
                </div>
                <div className={styles.modalText}>
                  <p className={styles.modalDescription}>{selectedService.detailedDescription}</p>
                </div>
              </div>
              
              <div className={styles.modalFooter}>
                <button className={styles.closeModalButton} onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </ModalPortal>
      )}
    </>
  );
};

export default Services;