import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../app/store';
import { logout } from '../../features/auth/authSlice';
import styles from './Header.module.css'; // Создадим стили чуть ниже

export const Header = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Парфенон</div>
      <nav className={styles.nav}>
        <Link to="/">Главная</Link>
        

        {isAuthenticated ? (
          <>
            <Link to="/trainings">Тренировки</Link>
            <Link to="/dashboard" className={styles.link}>Мой кабинет</Link>
            <button onClick={handleLogout} className={styles.button}>Выйти</button>
          </>
        ) : (
          <>
            <Link to="/login">Войти</Link>
            <Link to="/register">Регистрация</Link>
          </>
        )}
      </nav>
    </header>
  );
};