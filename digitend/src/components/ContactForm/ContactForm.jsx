import { useForm } from "react-hook-form";
import styles from './ContactForm.module.scss';
import { useState } from "react";

// Импортируем иконки
import circleIcon from '../../assets/icons/circle.svg';
import emailIcon from '../../assets/icons/email.svg';
import phoneIcon from '../../assets/icons/phone.svg';
import instagramIcon from '../../assets/icons/instagram.svg';

const ContactForm = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm();
  
  const [showPopup, setShowPopup] = useState(false);

  // Маска для телефона
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length > 0) {
      if (!value.startsWith('7') && !value.startsWith('8')) {
        value = '7' + value;
      }
      
      let formattedValue = '+7';
      if (value.length > 1) {
        formattedValue += ` (${value.substring(1, 4)}`;
      }
      if (value.length >= 5) {
        formattedValue += `) ${value.substring(4, 7)}`;
      }
      if (value.length >= 8) {
        formattedValue += `-${value.substring(7, 9)}`;
      }
      if (value.length >= 10) {
        formattedValue += `-${value.substring(9, 11)}`;
      }
      
      setValue('phone', formattedValue, { shouldValidate: true });
    }
  };

  const phoneValue = watch('phone');

  const onSubmit = (data) => {
    console.log('Form data:', data);
    setShowPopup(true);
    reset();
    
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.titlee}>Contact Us</h2>
      <div className={styles.container}>
        {/* Левая часть - Форма */}
        
        <div className={styles.leftSection}>
          
          
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.row}>
              <div className={styles.field}>
                <input
                  type="text"
                  placeholder="First Name"
                  className={`${errors.firstName ? styles.error : ''}`}
                  {...register("firstName", {
                    required: "First name is required",
                    pattern: {
                      value: /^[A-Za-zА-Яа-яЁё\s'-]+$/,
                      message: "Only letters, spaces, hyphens and apostrophes are allowed"
                    },
                    minLength: {
                      value: 2,
                      message: "Minimum 2 characters"
                    }
                  })}
                />
                {errors.firstName && <span>{errors.firstName.message}</span>}
              </div>

              <div className={styles.field}>
                <input
                  type="text"
                  placeholder="Last Name"
                  className={`${errors.lastName ? styles.error : ''}`}
                  {...register("lastName", {
                    required: "Last name is required",
                    pattern: {
                      value: /^[A-Za-zА-Яа-яЁё\s'-]+$/,
                      message: "Only letters, spaces, hyphens and apostrophes are allowed"
                    },
                    minLength: {
                      value: 2,
                      message: "Minimum 2 characters"
                    }
                  })}
                />
                {errors.lastName && <span>{errors.lastName.message}</span>}
              </div>
            </div>

            <div className={styles.field}>
              <input
                type="email"
                placeholder="Email"
                className={`${errors.email ? styles.error : ''}`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address. Must contain @ symbol and valid domain"
                  }
                })}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div className={styles.field}>
              <input
                type="tel"
                placeholder="Phone* (+7 (914) 076-99-17)"
                value={phoneValue || ''}
                className={`${errors.phone ? styles.error : ''}`}
                {...register("phone", {
                  required: "Phone number is required",
                  validate: (value) => {
                    const phoneDigits = value?.replace(/\D/g, '') || '';
                    return phoneDigits.length === 11 || "Invalid phone number. Must be 11 digits";
                  }
                })}
                onChange={handlePhoneChange}
                maxLength={22}
              />
              {errors.phone && <span>{errors.phone.message}</span>}
              <div className={styles.phoneHint}>
              
              </div>
            </div>

            <div className={styles.field}>
              <textarea
                placeholder="Your Message"
                {...register("message", {
                  minLength: {
                    value: 10,
                    message: "Message should be at least 10 characters"
                  }
                })}
              />
              {errors.message && <span>{errors.message.message}</span>}
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </div>

        {/* Правая часть - Контактная информация */}
        <div className={styles.rightSection}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <img src={circleIcon} alt="Address" />
              </div>
              <div className={styles.infoContent}>
                <h3>Our Office</h3>
                <p>1234 Digital Street, Suite 567</p>
                <p>Moscow, Russia 101000</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <img src={emailIcon} alt="Email" />
              </div>
              <div className={styles.infoContent}>
                <h3>Email Us</h3>
                <p>hello@digitend.com</p>
                <p>support@digitend.com</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <img src={phoneIcon} alt="Phone" />
              </div>
              <div className={styles.infoContent}>
                <h3>Call Us</h3>
                <p>+7 (495) 123-45-67</p>
                
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <img src={instagramIcon} alt="Instagram" />
              </div>
              <div className={styles.infoContent}>
                <h3>Follow Us</h3>
                <p>@digitend_studio</p>
             
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className={styles.popup}>
          <p>Thank you! Your message has been sent successfully.</p>
        </div>
      )}
    </section>
  );
};

export default ContactForm;