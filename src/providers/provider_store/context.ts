import { RootStoreInstance } from '@models/root_store_model/';
import React from 'react';

export const RootStoreContext = React.createContext<RootStoreInstance>(
  null as unknown as RootStoreInstance,
);
