import { types } from 'mobx-state-tree';

export const ChoiceModel = types.model({
  choice: types.string,
  votes: types.number,
});
