import styles from './ConfirmationModal.module.css';

interface Props {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmationModal = ({ isOpen, message, onConfirm, onCancel }: Props) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p>{message}</p>
        <div className={styles.actions}>
          <button className={styles.btnConfirm} onClick={onConfirm}>Да</button>
          <button className={styles.btnCancel} onClick={onCancel}>Нет</button>
        </div>
      </div>
    </div>
  );
};