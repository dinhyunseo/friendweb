import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCredentials } from '../../features/auth/authSlice';
import { MOCK_USERS } from '../../mock/users';
import styles from '../../styles/form.module.css';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Неверный email').required('Обязательно'),
  password: Yup.string().min(6, 'Минимум 6 символов').required('Обязательно'),
});

export const Login = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Вход в Парфенон</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          const user = MOCK_USERS.find(u => u.email === values.email && u.password === values.password);
          if (user) {
            dispatch(setCredentials({ 
              user: { id: user.id, name: user.name, email: user.email, role: user.role }, 
              token: 'fake-jwt-token' 
            }));
          } else {
            alert('Неверный логин или пароль!');
          }
        }}
      >
        <Form className={styles.form}>
          <Field name="email" placeholder="Email" className={styles.input} />
          <ErrorMessage name="email" component="div" className={styles.error} />
          
          <Field name="password" type="password" placeholder="Пароль" className={styles.input} />
          <ErrorMessage name="password" component="div" className={styles.error} />
          
          <button type="submit" className={styles.button}>Войти</button>
          
          <div className={styles.link}>
            Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};