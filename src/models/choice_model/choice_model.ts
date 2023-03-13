import { Instance, SnapshotIn, types } from 'mobx-state-tree';

export const ChoiceModel = types
  .model({
    choice: types.string,
    votes: types.number,
  })
  .actions((self) => ({
    updateVotes: (newVotes: number) => {
      self.votes = newVotes;
    },
  }));

export type ChoiceModelInstance = Instance<typeof ChoiceModel>;

export type ChoiceModelProperties = SnapshotIn<typeof ChoiceModel>;
