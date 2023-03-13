import { rootStoreModel } from '@models/root_store_model';
import React from 'react';
import { RootStoreContext } from './context';

const RootStore = rootStoreModel.create({ questions: [] });

export const ProviderStore = ({ children }: { children: React.ReactNode }) => (
  <RootStoreContext.Provider value={RootStore}>
    {children}
  </RootStoreContext.Provider>
);
