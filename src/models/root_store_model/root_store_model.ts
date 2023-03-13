import { QuestionModel } from '@models/question_model';
import { Instance, types } from 'mobx-state-tree';

export const rootStoreModel = types
  .model('RootStore', {
    questions: types.array(QuestionModel),
  })
  .views((self) => ({
    questionById(id: any) {
      return self.questions.find((question) => question.id === id);
    },
  }))
  .actions((self) => ({
    processQuestions(questions: any[]) {
      self.questions = questions;
    },
    processNewQuestions(questions: any[]) {
      self.questions = [...self.questions, ...questions];
    },
    processNewQuestion(question: any) {
      self.questions = [...self.questions, question];
    },
  }));

export type RootStoreInstance = Instance<typeof rootStoreModel>;
