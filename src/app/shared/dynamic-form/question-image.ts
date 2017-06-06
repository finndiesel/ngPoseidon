import { QuestionBase } from './question-base';

export class ImageQuestion extends QuestionBase<string> {
  controlType: string = 'image';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
