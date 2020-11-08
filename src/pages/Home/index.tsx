import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from '../../components/Header';
import { asyncExampleAction } from '../../store/actions/app.actions';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncExampleAction({ newText: 'novo teste' }));
  }, [dispatch]);

  return (
    <Header>
      <div>teste</div>
    </Header>
  );
};

export default Home;
