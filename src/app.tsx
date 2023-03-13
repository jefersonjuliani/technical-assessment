import AppRouter from '@pages/routes';
import { ProviderQuery } from '@providers/provider_query';
import { ProviderStore } from '@providers/provider_store';
import React from 'react';
import { globalStyles } from './theme/global';

const App = (): React.ReactElement => {
  globalStyles();

  return (
    <ProviderQuery>
      <ProviderStore>
        <AppRouter />
      </ProviderStore>
    </ProviderQuery>
  );
};

export default App;
