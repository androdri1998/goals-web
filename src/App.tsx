import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import Routes from './routes';
import store, { history } from './store';

import GlobalStyle from './styles/global';
import LoadGoals from './components/LoadGoals';

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <LoadGoals>
          <ConnectedRouter history={history}>
            <Routes />
          </ConnectedRouter>
        </LoadGoals>
      </Provider>
      <GlobalStyle />
    </>
  );
};

export default App;
