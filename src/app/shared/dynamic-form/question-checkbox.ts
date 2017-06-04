import { QuestionBase } from './question-base';

export class CheckboxQuestion extends QuestionBase<string> {
  controlType: string = 'checkbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
