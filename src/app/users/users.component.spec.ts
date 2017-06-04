/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsersComponent } from './users.component';
import { DataTableComponent } from '../shared/data-table/data-table.component';
import { MaterialModule } from '@angular/material';
import { DynamicFilterComponent } from '../shared/dynamic-form/filters/dynamic-filter.component';
import { FiltersComponent } from '../shared/dynamic-form/filters/filters.component';
import { FormsModule, ReactiveFormsModule } from'@angular/forms';
import { ApiService } from '../services/api.service';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http, RequestOptions } from '@angular/http';
import { BuildFormQuestions } from '../shared/dynamic-form/build-form-questions';

function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UsersComponent,
        DataTableComponent,
        DynamicFilterComponent,
        FiltersComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
      ],
      providers: [
        ApiService,
        {
          provide: AuthHttp,
          useFactory: authHttpServiceFactory,
          deps: [Http, RequestOptions]
        },
        BuildFormQuestions
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('all of the initial values should be set', () => {
    expect(component.title).toBeTruthy();
    expect(component.columns).toBeTruthy();
    expect(component.editProperties).toBeTruthy();
    expect(component.filters).toBeTruthy();
  });
});
