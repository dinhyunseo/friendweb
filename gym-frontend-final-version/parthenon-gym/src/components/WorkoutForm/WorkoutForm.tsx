import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './WorkoutForm.module.css';

const steps = [
  { title: 'Базовая информация', fields: ['title', 'type'] },
  { title: 'Детали', fields: ['duration', 'description'] }
];

export const WorkoutForm = () => {
  const [step, setStep] = useState(0);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Название обязательно'),
    type: Yup.string().required('Выберите тип'),
    duration: Yup.number().min(30, 'Мин 30 мин').required('Обязательно'),
  });

  return (
    <Formik
      initialValues={{ title: '', type: 'strength', duration: 60, description: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log('Финальные данные:', values)}
    >
      {({ values }) => (
        <Form className={styles.form}>
          <h3>Шаг {step + 1}: {steps[step].title}</h3>
          
          {values.title && <p>Тренировка: {values.title}</p>}

          {step === 0 && (
            <>
              <Field name="title" placeholder="Название" className={styles.input} />
              <ErrorMessage name="title" component="div" className={styles.error} />
              <Field as="select" name="type" className={styles.input}>
                <option value="strength">Силовая</option>
                <option value="cardio">Кардио</option>
                <option value="cardio">Йога</option>
              </Field>
            </>
          )}

          {step === 1 && (
            <>
              <Field name="duration" type="number" placeholder="Длительность" className={styles.input} />
              <Field name="description" as="textarea" placeholder="Описание" className={styles.input} />
            </>
          )}

          <div className={styles.buttons}>
            {step > 0 && <button type="button" onClick={() => setStep(step - 1)}>Назад</button>}
            {step < steps.length - 1 ? (
              <button type="button" onClick={() => setStep(step + 1)}>Далее</button>
            ) : (
              <button type="submit">Создать</button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};