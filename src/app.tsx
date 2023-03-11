import AppRouter from '@pages/routes';
import { ProviderQuery } from '@providers/provider_query';
import React from 'react';
import { globalStyles } from './theme/global';

const App = (): React.ReactElement => {
  globalStyles();

  return (
    <ProviderQuery>
      <AppRouter />
    </ProviderQuery>
  );
};

export default App;
