import React from 'react';

import Routes from './routes/routes';

import Provider from './context';

export default function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}
