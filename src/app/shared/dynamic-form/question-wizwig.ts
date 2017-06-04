import { QuestionBase } from './question-base';

export class WizwigQuestion extends QuestionBase<string> {
  controlType: string = 'wizwig';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
