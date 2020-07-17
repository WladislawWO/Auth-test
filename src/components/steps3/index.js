import React from 'react';
import { useDispatch } from 'react-redux';
import { setStep } from '@/services/actions/accounts';
import { Check } from '../../svg';
import st from './styles.scss';

const Step3 = () => {
  const dispatch = useDispatch();
  return (
    <div className={st.step}>
      <div className={st.check}>
        <Check />
      </div>
      <button onClick={() => dispatch(setStep(4))} className={st.goTo}>Go To Dashboard</button>
    </div>
  );
};

export default Step3;
