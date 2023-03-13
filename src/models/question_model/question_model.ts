import { ChoiceModel } from '@models/choice_model';
import { Instance, SnapshotIn, types } from 'mobx-state-tree';

export const QuestionModel = types
  .model({
    id: types.number,
    image_url: types.string,
    thumb_url: types.string,
    question: types.string,
    published_at: types.string,
    choices: types.array(ChoiceModel),
  })
  .views((self) => ({
    get resourceUrl(): string {
      return `/question/${self.id}`;
    },
  }));

export type QuestionModelInstance = Instance<typeof QuestionModel>;

export type QuestionModelProperties = SnapshotIn<typeof QuestionModel>;
