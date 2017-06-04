import { QuestionBase } from './question-base';

export class DisciplinesQuestion extends QuestionBase<string> {
  controlType: string = 'disciplines';
  options: any = {};

  constructor(options: {} = {}) {
    super(options);
  }
}
