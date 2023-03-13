import { RootStoreInstance } from '@models/root_store_model';
import { RootStoreContext } from '@providers/provider_store';
import React from 'react';

export const useQuestionsStore = (): RootStoreInstance['questions'] => {
  const context = React.useContext(RootStoreContext);

  if (context === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }

  return context.questions;
};
