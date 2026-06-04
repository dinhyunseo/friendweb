import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>&copy; {new Date().getFullYear()} Фитнес-клуб «Парфенон»</p>
        <div className={styles.links}>
          <span>Афины, Акрополь, ул. Dionysiou Areopagitou 15, 105 58, Греция</span>
          <span>|</span>
          <span>+7 (800) 555-35-35</span>
        </div>
      </div>
    </footer>
  );
};