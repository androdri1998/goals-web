import React from 'react';
import { Provider } from 'react-redux';

import Routes from './routes';
import store from './store';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
      <GlobalStyle />
    </>
  );
};

export default App;
