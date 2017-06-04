export class BaseFilter<T>{
  key: string;
  label: string;
  controlType: string;
  options: Array<any>;
  constructor(options: {
    key?: string,
    label?: string,
    controlType?: string,
    options?: Array<any>
  } = {}) {
    this.key = options.key || '';
    this.label = options.label || '';
    this.controlType = options.controlType || '';
    this.options = options.options || [];
  }
}
