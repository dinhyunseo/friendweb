import styles from './Landing.module.css';
import { SubscriptionCard } from '../../components/SubscriptionCard/SubscriptionCard';

export const Landing = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>«Парфенон»</h1>
        <p>Подход за подходом к совершенству тела и духа</p>
      </section>

      <section className={styles.philosophySection}>
        <h2>Наши идеалы</h2>
        <blockquote>
          «Красота есть сияние истины».
          <cite>— Платон</cite>
        </blockquote>
        <p>Мы верим, что атлетизм — это не только о внешней красоте. Это искусство владения собой. Мы строим храм вашего здоровья на фундаменте дисциплины и античных принципов гармонии.</p>
      </section>

      <section className={styles.pricingSection}>
        <h2>Абонементы</h2>
        <div className={styles.pricingGrid}>
            <SubscriptionCard title="Базовый" price="3000" features={["Тренажерный зал", "Раздевалка"]} />
            <SubscriptionCard title="Золотой" price="5000" features={["Все включено", "Сауна", "Персональный трекер"]} />
            <SubscriptionCard title="Олимпийский" price="8000" features={["VIP зал", "Питание", "Безлимит"]} />
        </div>
      </section>

      <section className={styles.mapSection}>
        <h2>Обитель совершенства</h2>
        <div className={styles.mapContainer}>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.2399796967734!2d23.726716599999996!3d37.9715285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd19ca39ee61%3A0x1b3fa079b878a218!2z0J_QsNGA0YTQtdC90L7QvQ!5e0!3m2!1sru!2sru!4v1780413573210!5m2!1sru!2sru" 
          width="100%" 
          height="400" 
          style= {{ border: 0, borderRadius: '12px' }} 
          allowFullScreen 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </div>
  );
};