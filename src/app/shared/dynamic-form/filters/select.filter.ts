import { BaseFilter } from './base.filter';

export class SelectFiler extends BaseFilter<any> {
  controlType: string = 'select';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || '';
  }
}
