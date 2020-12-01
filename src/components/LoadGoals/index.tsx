import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { asyncListGoals } from '../../store/actions/goals.actions';

const LoadGoals: React.FC = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncListGoals());
  }, [dispatch]);

  return <>{children}</>;
};

export default LoadGoals;
