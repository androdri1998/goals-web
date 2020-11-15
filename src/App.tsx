import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import Routes from './routes';
import store, { history } from './store';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
      <GlobalStyle />
    </>
  );
};

export default App;
