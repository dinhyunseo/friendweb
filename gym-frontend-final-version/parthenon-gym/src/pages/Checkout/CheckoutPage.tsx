import { useLocation } from 'react-router-dom';
import { CheckoutForm } from '../../components/CheckoutForm/CheckoutForm';
import styles from './CheckoutPage.module.css';

export const CheckoutPage = () => {
  const location = useLocation();
  const { plan, price } = location.state || { plan: 'Абонемент', price: '0' };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Оформление покупки</h1>
      <div className={styles.card}>
        <p>Вы выбрали: <strong>{plan}</strong></p>
        <CheckoutForm plan={plan} price={price} />
      </div>
    </div>
  );
};