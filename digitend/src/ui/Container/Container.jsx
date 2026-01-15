import styles from '../Container/Container.module.scss';

export const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
