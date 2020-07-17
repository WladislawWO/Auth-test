import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { userDataSelector } from '../../utils/selectors';

import st from './styles.scss';

const userSelector = createSelector(
  userDataSelector,
  (currentUser) => currentUser,
);

const UserInfo = () => {
  const userData = useSelector(userSelector);
  return (
    <div className={st.info}>
      <pre>
        {JSON.stringify(userData, null, 2)}
      </pre>
    </div>
  );
};

export default UserInfo;
