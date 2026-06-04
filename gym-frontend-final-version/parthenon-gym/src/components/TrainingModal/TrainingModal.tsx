import type { Training } from '../../types';
import styles from './TrainingModal.module.css'; // Создай этот файл для стилей модалки

interface Props {
  training: Training;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const TrainingModal = ({ training, isOpen, onClose, onConfirm }: Props) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>{training.title}</h2>
        <div className={styles.modalContent}>
          <p><strong>Тренер:</strong> {training.trainerName}</p>
          <p><strong>Время:</strong> {training.time}</p>
          <p><strong>Описание:</strong> {training.description || 'Описание отсутствует'}</p>
          <p className={styles.capacity}><strong>Места:</strong> {training.enrolled} / {training.capacity}</p>
        </div>
        <div className={styles.modalActions}>
          <button className={styles.confirmBtn} onClick={onConfirm}>Подтвердить запись</button>
          <button className={styles.closeBtn} onClick={onClose}>Закрыть</button>
        </div>
      </div>
    </div>
  );
};