import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Добавили useSelector
import { bookTraining, cancelTraining } from '../../features/auth/authSlice';
import { TrainingModal } from '../TrainingModal/TrainingModal';
import { ConfirmationModal } from '../ConfirmationModal/ConfirmationModal';
import type { Training } from '../../types/index';
import type { RootState } from '../../app/store'; // Импортируйте ваш тип состояния
import styles from './TrainingCard.module.css';

interface Props {
  training: Training;
  isDashboard?: boolean;
}

export const TrainingCard = ({ training, isDashboard }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const isTrainer = user?.role === 'trainer';

  const handleAction = () => {
    if (isDashboard) {
      dispatch(cancelTraining(training.id));
      alert('Запись отменена');
    } else {
      dispatch(bookTraining(training));
      alert('Запись подтверждена!');
      setIsModalOpen(false);
    }
    setIsConfirmOpen(false);
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.content}>
          <h3>{training.title}</h3>
          <p><strong>Тренер:</strong> {training.trainerName}</p>
          <p><strong>Время:</strong> {training.time}</p>
        </div>
        
        {isDashboard ? (
          <button className={styles.cancelBtn} onClick={() => setIsConfirmOpen(true)}>
            Отменить запись
          </button>
        ) : (
          !isTrainer && (
            <button className={styles.detailsBtn} onClick={() => setIsModalOpen(true)}>
              Подробнее
            </button>
          )
        )}
      </div>

      {!isDashboard && !isTrainer && (
        <TrainingModal 
          training={training} 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          onConfirm={() => {
            setIsModalOpen(false);
            setIsConfirmOpen(true);
          }}
        />
      )}

      {!isTrainer && (
        <ConfirmationModal 
          isOpen={isConfirmOpen}
          message={`Вы уверены, что хотите ${isDashboard ? 'отменить запись на' : 'записаться на'} "${training.title}"?`}
          onConfirm={handleAction}
          onCancel={() => setIsConfirmOpen(false)}
        />
      )}
    </>
  );
};