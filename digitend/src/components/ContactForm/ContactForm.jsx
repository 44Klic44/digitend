import { useForm } from 'react-hook-form';
import styles from '../ContactForm/ContactForm.module.scss';
import { useState } from 'react';

const ContactBlock = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: 'onSubmit' });

  const [success, setSuccess] = useState(false);

  const onSubmit = () => {
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        {/* ---------- ФОРМА ---------- */}
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.row}>
            <div className={styles.field}>
              <input
                placeholder="First name"
                {...register('firstName', {
                  required: 'Required',
                  pattern: {
                    value: /^[A-Za-zА-Яа-я]+$/,
                    message: 'Only letters'
                  }
                })}
                className={errors.firstName ? styles.error : ''}
              />
              {errors.firstName && <span>{errors.firstName.message}</span>}
            </div>

            <div className={styles.field}>
              <input
                placeholder="Last name"
                {...register('lastName', {
                  required: 'Required',
                  pattern: {
                    value: /^[A-Za-zА-Яа-я]+$/,
                    message: 'Only letters'
                  }
                })}
                className={errors.lastName ? styles.error : ''}
              />
              {errors.lastName && <span>{errors.lastName.message}</span>}
            </div>
          </div>

          <div className={styles.field}>
            <input
              placeholder="Email"
              {...register('email', {
                required: 'Required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email'
                }
              })}
              className={errors.email ? styles.error : ''}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div className={styles.field}>
            <input
              placeholder="Phone"
              {...register('phone', {
                required: 'Required',
                pattern: {
                  value: /^[0-9+()\s-]+$/,
                  message: 'Only numbers'
                }
              })}
              className={errors.phone ? styles.error : ''}
            />
            {errors.phone && <span>{errors.phone.message}</span>}
          </div>

          <div className={styles.field}>
            <textarea
              placeholder="Message"
              {...register('message', { required: 'Required' })}
              className={errors.message ? styles.error : ''}
            />
            {errors.message && <span>{errors.message.message}</span>}
          </div>

          <button type="submit">CONTACT US</button>
        </form>

        {/* ---------- ПРАВЫЙ БЛОК ---------- */}
        <div className={styles.info}>
          <p>📍 lorem ipsum locationado superum</p>
          <p>✉️ lorem.ipsum@gmail.com</p>
          <p>📱 +98564155 54646</p>
          <p>☎️ +98564155 54646</p>
        </div>
      </div>

      {success && <div className={styles.popup}>Form sent successfully</div>}
    </section>
  );
};

export default ContactBlock;
