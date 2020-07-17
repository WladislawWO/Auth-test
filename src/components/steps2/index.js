import React from 'react';
import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import { setStep, setUserData } from '@/services/actions/accounts';
import { valideteDate, valideteYear } from '../../utils/validation';

import st from './styles.scss';

const Step1 = () => {
  const dispatch = useDispatch();
  return (
    <div className={st.step}>
      <Formik
       initialValues={{
         sex: 'male',
         d: '',
         m: '',
         y: '',
         rumors: 'somewhere',
       }}
       onSubmit={(values) => {
         const data = {
           sex: values.sex,
           rumors: values.rumors,
           date: `${values.d}-${values.m}-${values.y}`,
         };
         dispatch(setUserData(data));
       }}
     >
       {({ values, errors, touched }) => (
         <Form className={st.form}>
           <label>
            {(errors.d && touched.d) || (errors.m && touched.m) || (errors.y && touched.y)
              ? <div className={st.error}>{errors.d || errors.m || errors.y}</div>
              : 'date of birth'}
           </label>
           <div className={st.dateContainer}>
              <Field maxlength="2" name="d" placeholder="DD" validate={valideteDate}
               className={`${st.date} ${errors.d && touched.d && st.dateError}`}
               />
              <Field maxlength="2"name="m" placeholder="MM" validate={valideteDate}
                className={`${st.date} ${errors.m && touched.m && st.dateError}`}
               />
              <Field maxlength="4"name="y" placeholder="YYYY" validate={valideteYear}
                className={`${st.date} ${errors.y && touched.y && st.dateError}`}
               />
           </div>

           <label htmlFor="email">gender</label>
           <Field
              name="gender"
              render={({ field }) => (
                <div className={st.sexContainer}>
                  <div className={st.radio}>
                    <input {...field} id="radio-1" type="radio" name="sex" value="male"
                    checked={values.sex === 'male'}
                    />
                    <label htmlFor="radio-1">male</label>
                  </div>

                  <div className={st.radio}>
                    <input {...field} id="radio-2" type="radio" name="sex" value="female"
                    checked={values.sex === 'female'}
                    />
                    <label htmlFor="radio-2">female</label>
                  </div>

                  <div className={st.radio}>
                    <input {...field} id="radio-3" type="radio" name="sex" value="unspecified"
                    checked={values.sex === 'unspecified'}
                    />
                    <label htmlFor="radio-3">unspecified</label>
                  </div>
                </div>
              )}
            />

           <label htmlFor="email">where did you hear about is?</label>
           <Field name="rumors" as="select" placeholder="YYYY" className={st.select}>
              <option className={st.option} value="somewhere">Somewhere</option>
              <option className={st.option} value="nowhere">Nowhere</option>
           </Field>

           <div className={st.button}>
              <button onClick={() => dispatch(setStep(1))} className={st.back} type="submit">Back</button>
              <button type="submit">Next</button>
           </div>
         </Form>
       )}
     </Formik>
    </div>
  );
};

export default Step1;
