import React from 'react';
import styles from './Pricing.module.scss';
import checkIcon from '../../assets/icons/Vector.svg';
import { FormPopup } from '../../components/Modal/FormPopup'; 
import { useState } from 'react';

const Pricing = () => {

    const [isFormOpen, setIsFormOpen] = useState(false);

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'mo',
      features: [
        '1 user request',
        '1 design account',
        'Email support',
        '10 deployment'
      ],
      buttonText: 'Choose Plan',
      isPremium: false,
      isEnterprise: false
    },
    {
      name: 'Premium',
      price: '$55',
      period: 'mo',
      features: [
        '10 user request',
        '3 design account',
        'Email Support',
        '100 deployment',
        '24/7 Support',
        'Premium Support'
      ],
      buttonText: 'Choose Plan',
      isPremium: true,
      isEnterprise: false
    },
    {
      name: 'Enterprise',
      price: '$105',
      period: 'mo',
      features: [
        'Unlimited user request',
        '3 to 50 design account',
        'Email support',
        'Unlimited deployment',
        '24/7 Support',
        'Advanced security',
        'Invoice and billing'
      ],
      buttonText: 'Choose Plan',
      isPremium: false,
      isEnterprise: true
    }
  ];

  return (
    <section className={styles.pricing}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title} >Choose Our Plan</h2>
          <p className={styles.subtitle}>
            Flexible pricing plans designed to scale with your business, from startup to enterprise.
          </p>
        </div>

        <div className={styles.cards}>
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`${styles.card} ${plan.isPremium ? styles.premium : ''} ${plan.isEnterprise ? styles.enterprise : ''}`}
            >
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{plan.name}</h3>
                <div className={styles.price}>
                  <span className={styles.priceAmount}>{plan.price}</span>
                  <span className={styles.priceSlash}>/</span>
                  <span className={styles.pricePeriod}>{plan.period}</span>
                </div>
                
                <ul className={styles.features}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <img src={checkIcon} alt="check" className={styles.checkIcon} />
                      <span className={styles.featureText}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button  onClick={() => setIsFormOpen(true)} className={`${styles.chooseButton} ${plan.isPremium ? styles.premiumButton : styles.standardButton}`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FormPopup
  isOpen={isFormOpen}
  onClose={() => setIsFormOpen(false)}
/>
    </section>
    
  );
};

export default Pricing;