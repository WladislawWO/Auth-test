import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { stepSelector } from '../../utils/selectors';
import {
  Step1, Step2, Step3, UserInfo,
} from '../../components';

import st from './styles.scss';

const getSpetSelector = createSelector(
  stepSelector,
  (currentUser) => currentUser,
);

const Main = () => {
  const switcher = useSelector(getSpetSelector);
  const Steps = {
    1: <Step1/>,
    2: <Step2/>,
    3: <Step3/>,
    4: <UserInfo/>,
  };
  return (
    <div className={st.page}>
      <div className={st.container}>
        <div className={st.header}>Signup</div>
        <progress value={33.3333 * switcher} max="100"/>
        {Steps[switcher]}
      </div>
    </div>
  );
};

export default Main;
