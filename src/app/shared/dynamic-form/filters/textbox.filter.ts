import { BaseFilter } from './base.filter';

export class TextboxFilter extends BaseFilter<string> {
  controlType: string = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
