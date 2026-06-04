import { MOCK_TRAININGS } from '../../mock/trainings';
import { TrainingCard } from '../../components/TrainingCard/TrainingCard';
import styles from './TrainingsPage.module.css';

export const TrainingsPage = () => {
  return (
    <div className={styles.container}>
      <h1>Расписание тренировок</h1>
      <div className={styles.trainingList}>
        {MOCK_TRAININGS.map((t) => (
          <TrainingCard key={t.id} training={t} />
        ))}
      </div>
    </div>
  );
};