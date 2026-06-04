import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RootState } from '../../app/store';
import { TrainingCard } from '../../components/TrainingCard/TrainingCard';
import { WorkoutForm } from '../../components/WorkoutForm/WorkoutForm';
import styles from './Dashboard.module.css';

export const Dashboard = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className={styles.container}>
      <h1>Личный кабинет</h1>
      {user?.role === 'trainer' ? (
        <div className={styles.trainerPanel}>
          <button onClick={() => setIsFormOpen(!isFormOpen)} className={styles.actionButton}>
            {isFormOpen ? 'Закрыть' : '+ Создать тренировку'}
          </button>
          {isFormOpen && <WorkoutForm />}
        </div>
      ) : (
        <div className={styles.clientPanel}>
          <h2>Мои записи</h2>
          
          <div className={styles.list}>
            {user?.bookedTrainings?.length ? (
              user.bookedTrainings.map(t => <TrainingCard key={t.id} training={t} isDashboard={true} />)
            ) : (
              <div className={styles.emptyState}>
                <p>Нет записей.</p>
                <Link to="/trainings" className={styles.linkToCatalog}>Выбрать тренировку</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};