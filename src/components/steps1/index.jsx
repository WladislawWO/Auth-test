import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData, setData } from '@/services/actions/accounts';
import { createSelector } from 'reselect';
import { userDataSelector } from '../../utils/selectors';
import { validateEmail, validatePassword, isPasswordEqual } from '../../utils/validation';

import st from './styles.scss';

const userSelector = createSelector(
  userDataSelector,
  (currentUser) => currentUser,
);

const Step1 = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  return (
    <div className={st.step}>
      <Formik
       initialValues={{
         email: user.email,
         password: user.password,
         confirmpsw: user.password,
       }}
       onSubmit={(values) => {
         delete values.confirmpsw;
         dispatch(setUserData(values));
       }}
     >
       {({
         values, errors, touched,
       }) => (
         <Form className={st.form}>
           <div className={st.label}>
              {errors.email && touched.email ? <div className={st.error}>{errors.email}</div> : ('Email')}
           </div>
           <Field type="email" name="email" validate={validateEmail} className={st.email}/>

           <div className={st.label}>
              {errors.password && touched.password ? <div className={st.error}>{errors.password}</div> : ('Password')}
           </div>
           <Field type="password" validate={validatePassword} name="password" className={st.password}/>

           <div className={st.label}>
              {errors.confirmpsw && touched.confirmpsw ? <div className={st.error}>{errors.confirmpsw}</div> : ('Confirm password')}
           </div>
           <Field type="password" validate={(e) => isPasswordEqual(e, values)} name="confirmpsw" className={st.confirmpsw}/>
           <div className={st.button}>
              <button type="submit">Next</button>
           </div>
         </Form>
       )}
     </Formik>
    </div>
  );
};

export default Step1;
