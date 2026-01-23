import { useForm } from "react-hook-form";
import { useEffect } from "react";
import styles from './FormPopup.module.scss';

export const FormPopup = ({ isOpen, onClose }) => {
  const { register, handleSubmit, formState: { errors }, reset, watch, setValue } = useForm();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; }
  }, [isOpen]);

  const phoneValue = watch('phone');

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 0) {
      if (!value.startsWith('7') && !value.startsWith('8')) value = '7' + value;

      let formattedValue = '+7';
      if (value.length > 1) formattedValue += ` (${value.substring(1, 4)}`;
      if (value.length >= 5) formattedValue += `) ${value.substring(4, 7)}`;
      if (value.length >= 8) formattedValue += `-${value.substring(7, 9)}`;
      if (value.length >= 10) formattedValue += `-${value.substring(9, 11)}`;

      setValue('phone', formattedValue, { shouldValidate: true });
    }
  };

  const onSubmit = (data) => {
    console.log('Form data:', data);
    reset();
    onClose();
    alert('Thank you! Your message has been sent.');
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.close} onClick={onClose}>✕</button>

        
        <p className={styles.subtitle}>PLEASE FILL OUT THE FORM</p>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.field}>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>

          <div className={styles.field}>
            <input
              type="tel"
              placeholder="Phone"
              value={phoneValue || ''}
              {...register("phone", {
                required: "Phone is required",
                validate: value => (value.replace(/\D/g, '').length === 11) || "Phone must be 11 digits"
              })}
              onChange={handlePhoneChange}
              maxLength={22}
            />
            {errors.phone && <span>{errors.phone.message}</span>}
          </div>

          <div className={styles.field}>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div className={styles.checkbox}>
            <input
              type="checkbox"
              id="privacy"
              {...register("privacy", { required: "You must accept the Privacy Policy" })}
            />
            <label htmlFor="privacy">
              I agree with the <a href="/privacy-policy" target="_blank">Privacy Policy</a>
            </label>
            {errors.privacy && <span>{errors.privacy.message}</span>}
          </div>

          <button type="submit" className={styles.submitBtn}>Submit</button>
        </form>
      </div>
    </div>
  );
};
