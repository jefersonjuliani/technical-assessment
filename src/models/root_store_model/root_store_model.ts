import { QuestionModel } from '@models/question_model';
import { Instance, types } from 'mobx-state-tree';

export const rootStoreModel = types
  .model('RootStore', {
    questions: types.array(QuestionModel),
  })
  .actions((self) => ({
    processQuestions(questions: any[]) {
      self.questions = questions;
    },
    processNewQuestions(questions: any[]) {
      self.questions = [...self.questions, ...questions];
    },
  }));

export type RootStoreInstance = Instance<typeof rootStoreModel>;
