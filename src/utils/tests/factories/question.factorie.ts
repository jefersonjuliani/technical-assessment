import { QuestionModel, QuestionModelInstance } from '@models/question_model';

const defaultId = 1;

export const questionFactory = (options?: {
  id?: number;
  question?: string;
}): QuestionModelInstance =>
  QuestionModel.create({
    id: options?.id || defaultId,
    question: options?.question || 'Favourite programming language?',
    image_url:
      'https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)',
    thumb_url:
      'https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)',
    published_at: '2015-08-05T08:40:51.620Z',
    choices: [
      {
        choice: 'Swift',
        votes: 2048,
      },
      {
        choice: 'Python',
        votes: 1024,
      },
      {
        choice: 'Objective-C',
        votes: 512,
      },
      {
        choice: 'Ruby',
        votes: 256,
      },
    ],
  }) as QuestionModelInstance;
