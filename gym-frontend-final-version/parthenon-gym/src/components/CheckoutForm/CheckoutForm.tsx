import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom'; // 1. Импортируем хук
import styles from './CheckoutForm.module.css';

const validationSchema = Yup.object({
  fullName: Yup.string().required('Введите ФИО'),
  cardNumber: Yup.string()
    .matches(/^\d{16}$/, 'Номер карты должен состоять из 16 цифр')
    .required('Введите номер карты'),
});

export const CheckoutForm = ({ plan, price }: { plan: string, price: string }) => {
  const navigate = useNavigate(); // 2. Инициализируем хук

  return (
    <Formik
      initialValues={{ fullName: '', cardNumber: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        alert(`Оплата ${plan} на сумму ${price} успешно прошла!`);
        console.log(values);

        navigate('/'); 
      }}
    >
      <Form className={styles.form}>
        <div className={styles.group}>
          <label>ФИО владельца</label>
          <Field name="fullName" className={styles.input} />
          <ErrorMessage name="fullName" component="div" className={styles.error} />
        </div>

        <div className={styles.group}>
          <label>Номер карты</label>
          <Field name="cardNumber" className={styles.input} />
          <ErrorMessage name="cardNumber" component="div" className={styles.error} />
        </div>

        <button type="submit" className={styles.submitBtn}>Оплатить {price} ₽</button>
      </Form>
    </Formik>
  );
};