import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseFilter } from './base.filter';
import { FilterControlService } from './filter-control.service';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styles: [ '.submit-btn { display: block; margin: 0 auto; }' ],
  providers: [ FilterControlService ],
})
export class FiltersComponent implements OnInit {
  @Input() filters: BaseFilter<any>[] = [];
  @Output() search = new EventEmitter();
  @Output() formChanges = new EventEmitter();

  form: FormGroup;

  constructor(private fcs: FilterControlService) { }

  ngOnInit() {
    console.log(this.filters)
    this.form = this.fcs.toFormGroup(this.filters);
    this.form.valueChanges
      .map((data: any) => data)
      .subscribe(
      (data: any) => this.formChanges.emit(data)
    );
  }

  onSubmit() {
    this.search.emit(this.form.value);
  }
}
