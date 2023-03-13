import { ChoiceModel, ChoiceModelInstance } from '@models/choice_model';

const votesDefault = 2048;

export const choiceFactory = (options?: {
  choice?: string;
  votes?: number;
}): ChoiceModelInstance =>
  ChoiceModel.create({
    choice: options?.choice || 'Swift',
    votes: options?.votes || votesDefault,
  }) as ChoiceModelInstance;
