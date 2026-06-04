import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../styles/form.module.css';

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('Введите имя'),
  email: Yup.string().email('Неверный email').required('Обязательно'),
  password: Yup.string().min(6, 'Минимум 6 символов').required('Обязательно'),
});

export const Register = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Регистрация</h1>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={RegisterSchema}
        onSubmit={(values) => {
          console.log("Регистрация данных:", values);
          alert("Регистрация успешна! Теперь вы можете войти.");
          navigate('/login');
        }}
      >
        <Form className={styles.form}>
          <Field name="name" placeholder="Имя" className={styles.input} />
          <ErrorMessage name="name" component="div" className={styles.error} />

          <Field name="email" placeholder="Email" className={styles.input} />
          <ErrorMessage name="email" component="div" className={styles.error} />
          
          <Field name="password" type="password" placeholder="Пароль" className={styles.input} />
          <ErrorMessage name="password" component="div" className={styles.error} />
          
          <button type="submit" className={styles.button}>Зарегистрироваться</button>
          
          <div className={styles.link}>
            Уже есть аккаунт? <Link to="/login">Войти</Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};