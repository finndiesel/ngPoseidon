import { QuestionBase } from './question-base';

export class FileQuestion extends QuestionBase<string> {
  controlType: string = 'file';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
