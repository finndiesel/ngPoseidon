import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseFilter } from './base.filter';
@Component({
  selector: 'df-filter',
  templateUrl: './dynamic-filter.component.html',
  styles: ['.filter { padding: 16px; }'],
})
export class DynamicFilterComponent implements OnInit {
  @Input() filter: BaseFilter<any>;
  @Input() form: FormGroup;
  ngOnInit() { console.log(this.filter) }
  get isValid() { return this.form.controls[this.filter.key].valid; }
}
