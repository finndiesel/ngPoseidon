import { QuestionBase } from './question-base';

export class IdQuestion extends QuestionBase<string> {
  controlType: string = 'id';
  id: number;

  constructor(options: {} = {}) {
    super(options);
    this.id = options['id'] || '';
  }
}
