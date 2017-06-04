import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthHttp } from 'angular2-jwt';
import { environment } from '../../../../environments/environment';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'df-discipline',
  template: `
      <md-input-container [formGroup]="formGroup">
        <input type="text" mdInput [id]="key" name="{{key}}" [formControlName]="key" [formControl]="control" [mdAutocomplete]="auto" placeholder="{{ label }}">
      </md-input-container>
  
      <md-autocomplete #auto="mdAutocomplete">
         <md-option *ngFor="let value of disciplines" [value]="value">
            {{ value }}
         </md-option>
      </md-autocomplete>
  `
})
export class DisciplineQuestionComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() key: string;
  @Input() label: string;

  control: FormControl = new FormControl();
  disciplines: String[];

  constructor(private authHttp: AuthHttp) {}

  ngOnInit() {
    this.control.valueChanges.startWith(2).subscribe((data: any) => {
      console.log(this.formGroup)
      if (this.control.value) {
        this.formGroup.setValue({disciplines: this.control.value});
        this.getDisciplines();
      }
    });
  }

  getDisciplines() {
    this.authHttp.get(environment.host + 'admin/api/disciplines?term=' + this.control.value)
      .debounceTime(500)
      .distinctUntilChanged()
      .map((data: any) => data = data.json())
      .subscribe((data: any) => {
        this.disciplines = data;
      }
    );
  }

}
