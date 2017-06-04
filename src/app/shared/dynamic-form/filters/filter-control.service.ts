import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { BaseFilter } from './base.filter';

@Injectable()
export class FilterControlService {
  toFormGroup(filters: BaseFilter<any>[] ) {
    const group: any = {};
    if (filters) {
      filters.forEach(filter => {
        if (filter) {
          group[filter.key] = new FormControl('');
        }
      });
    }
    return new FormGroup(group);
  }
}
