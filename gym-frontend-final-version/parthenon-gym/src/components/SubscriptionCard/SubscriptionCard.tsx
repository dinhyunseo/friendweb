import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../../app/store';
import styles from './SubscriptionCard.module.css';

interface SubscriptionProps {
  title: string;
  price: string;
  features: string[];
}

export const SubscriptionCard = ({ title, price, features }: SubscriptionProps) => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const handleSubscription = () => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      navigate('/checkout', { state: { plan: title, price } });
    }
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>{price} ₽</p>
      <ul className={styles.featuresList}>
        {features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      
      {/* Кнопка отображается только если пользователь не тренер */}
      {user?.role !== 'trainer' && (
        <button className={styles.btn} onClick={handleSubscription}>
          Выбрать
        </button>
      )}
    </div>
  );
};