import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Services.module.scss';
import arrowIcon from '../../assets/icons/Arrow.svg';

// Импортируем изображения карточек
import amicoImage from '../../assets/Services/amico.png';
import cuateImage from '../../assets/Services/rafiki.png';
import rafikiImage from '../../assets/Services/cuate.png';

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
      description: 'Strategic campaigns across all digital channels to increase visibility, engagement, and conversion rates for your business.',
      detailedTitle: 'Digital Marketing',
      detailedDescription: 'Our digital marketing services encompass the full cycle of promoting your brand in the online environment. We develop comprehensive strategies that include social media management, pay-per-click advertising, email marketing, and performance analytics. Each campaign is meticulously planned based on an analysis of your target audience and competitive landscape. We utilize advanced automation and tracking tools to optimize budgets and achieve maximum conversion. Our goal is not just to increase reach, but to create a sustainable system for attracting and retaining customers that delivers measurable business results.',
      image: amicoImage,
    },
    {
      id: 2,
      title: 'SEO Consultancy',
      description: 'Data-driven SEO strategies that improve search rankings, drive organic traffic, and establish your online authority.',
      detailedTitle: 'SEO Consultancy',
      detailedDescription: 'Our SEO consultancy is based on deep analysis of your websites technical aspects and a strategic approach to content optimization. We conduct comprehensive audits to identify factors hindering ranking growth and develop a phased improvement plan. Our work includes technical website optimization, semantic core research, creation of relevant content, and building high-quality backlinks. We focus on sustainable results, using only white-hat promotion methods that comply with search engine guidelines and ensure long-term organic traffic growth.',
      image: cuateImage,
    },
    {
      id: 3,
      title: 'Content Writing',
      description: 'Compelling content creation that tells your brand story, engages your audience, and supports your marketing objectives.',
      detailedTitle: 'Content Writing',
      detailedDescription: 'Our copywriting team creates content that doesnt just inform, but engages and converts. We develop content strategies based on understanding your brand, business goals, and target audience profile. From SEO-optimized website texts to video scripts and social media posts, we ensure a consistent tone and communication style. Each piece undergoes multiple quality checks for uniqueness and alignment with marketing objectives, helping to strengthen your brand authority and improve its visibility in search engines.',
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
              Comprehensive digital services designed to elevate your brand and accelerate business growth in the modern marketplace.
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