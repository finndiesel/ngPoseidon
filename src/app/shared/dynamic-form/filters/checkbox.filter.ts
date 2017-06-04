import { BaseFilter } from './base.filter';

export class CheckboxFiler extends BaseFilter<any> {
  controlType: string = 'checkbox';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || '';
  }
}
