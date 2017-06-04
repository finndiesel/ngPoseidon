import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdAutocompleteModule, MdButtonModule, MdCardModule, MdCheckboxModule, MdDatepickerModule, MdDialogModule, MdIconModule,
  MdInputModule, MdMenuModule, MdNativeDateModule, MdSelectModule, MdProgressSpinnerModule, MdToolbarModule, MdSidenavModule,
  MdSnackBarModule
} from '@angular/material';
import { APP_ROUTER_PROVIDERS } from './routes';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import 'hammerjs';

import { AppComponent } from './app.component';
import { DataTableComponent } from './shared/data-table/data-table.component';
import { AddDialogComponent } from './shared/data-table/add-dialog/add-dialog.component';
import { EditDialogComponent } from './shared/data-table/edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './shared/data-table/delete-dialog/delete-dialog.component';
import { UsersComponent } from './users/users.component';
import { DynamicFormComponent } from './shared/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './shared/dynamic-form/dynamic-form-question.component';
import { DynamicFilterComponent } from './shared/dynamic-form/filters/dynamic-filter.component';
import { FiltersComponent } from './shared/dynamic-form/filters/filters.component';
import { QuestionControlService } from './shared/dynamic-form/question-control.service';
import { FilterControlService } from './shared/dynamic-form/filters/filter-control.service';
import { LoginService } from './services/login.service';
import { AuthGuard } from './auth_guard.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ApiService } from './services/api.service';
import { DisciplineQuestionComponent } from './shared/dynamic-form/autocomplete-questions/disciplines-question.component';
import { ArticlesComponent } from './articles/articles.component';
import { BuildFormQuestions } from './shared/dynamic-form/build-form-questions';

import { CKEditorModule } from 'ng2-ckeditor';
import { ToIntPipe } from './to-int.pipe';
import { GroupsComponent } from './groups/groups.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    globalHeaders: [{
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': '*'
    }],
  }), http, options);
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MdAutocompleteModule, MdButtonModule, MdCardModule, MdCheckboxModule, MdDatepickerModule, MdDialogModule, MdIconModule,
    MdInputModule, MdMenuModule, MdNativeDateModule, MdToolbarModule, MdSelectModule, MdProgressSpinnerModule, MdSidenavModule,
    MdSnackBarModule,
    APP_ROUTER_PROVIDERS,

    // 3rd-party
    ChartsModule,
    CKEditorModule
  ],
  declarations: [
    AppComponent,
    DataTableComponent,
    DataTableComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    DynamicFilterComponent,
    FiltersComponent,
    AddDialogComponent,
    UsersComponent,
    LoginComponent,
    HomeComponent,
    DisciplineQuestionComponent,
    ArticlesComponent,
    ToIntPipe,
    GroupsComponent,
  ],
  providers: [
    QuestionControlService,
    FilterControlService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    AuthGuard,
    LoginService,
    ApiService,
    BuildFormQuestions,
  ],
  entryComponents: [ AddDialogComponent, EditDialogComponent, DeleteDialogComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
