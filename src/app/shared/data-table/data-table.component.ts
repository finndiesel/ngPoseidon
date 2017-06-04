// DataTableComponent designed to encompass different components within an administration app

import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { URLSearchParams } from '@angular/http';
import { MdDialogRef, MdDialog, MdSnackBar } from '@angular/material';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { BuildFilters } from '../dynamic-form/filters/build-filters';
import { QuestionBase } from '../dynamic-form/question-base';
import { ApiService } from '../../services/api.service';
import { BuildFormQuestions } from '../dynamic-form/build-form-questions';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  animations: [
    trigger('searchAnimation', [
      state('*', style({opacity: 1})),
      state('void', style({opacity: 0})),
      transition('void => *', [
        style({opacity: 0}),
        animate(250)
      ]),
      transition('* => void', [
        style({opacity: 1}),
        animate(250)
      ])
    ])
  ]
})

export class DataTableComponent implements OnInit {

  @Input() title: string;
  @Input() columns: Array<string>;
  @Input() editProperties: Array<any>;
  @Input() filters: Array<any>;
  @Input() apiRoute: string;

  tableFilters: QuestionBase<any>[];

  loading: boolean = true;
  data: Array<any>;
  checkedAll: boolean;
  checkedMap: any = {};
  numbers = ['10', '20', '30', '50'];
  selectedPageNum = '10';
  page: number = 1;
  tableCount: number = 1;
  formFilters: string[];
  tableFiltered = false;

  perPage: string = '10';

  showSearchBar: boolean = false;

  addDialog: MdDialogRef<AddDialogComponent>;
  editDialog: MdDialogRef<EditDialogComponent>;
  deleteDialog: MdDialogRef<DeleteDialogComponent>;

  editIndex: number;

  filtersOpened: boolean = false;

  constructor(public dialog: MdDialog, public snackBar: MdSnackBar,
              private apiService: ApiService, private buildQuestions: BuildFormQuestions) { }

  ngOnInit() {
    this.updateTable();
    this.tableFilters = new BuildFilters().build(this.filters);
  }

  searchParams() {
    const params = new URLSearchParams();
    params.set('page', this.page.toString());
    params.set('per_page', this.perPage);
    return params;
  }

  filterParams(): any {
    const filters = {};

    if (this.formFilters) {
      for (const key in this.formFilters) {
        const value = this.formFilters[key]
        if (value && value !== '') {
          filters[key] = value;
        }
      }
    }

    return {
      page: this.page.toString(),
      per_page: this.perPage,
      filters: filters
    };
  }

  updateTable() {
    this.apiService.index(this.apiRoute, this.searchParams()).subscribe(
      (data: any) => {
        this.data = JSON.parse(data.json().data);
        this.setTable(data);
      },
      (error: any) => {
        console.error(error);
        this.snackBar.open(error, 'Dismiss', {
          duration: 10000,
        });
      }
    );
  }

  filterTable() {
    this.apiService.filter(this.apiRoute, this.filterParams()).subscribe(
      (data: any) => {
        this.tableFiltered = true;
        this.data = data.json().data;
        this.setTable(data);
      },
      (error: any) => {
        console.error(error);
        this.snackBar.open(error, 'Dismiss', {
          duration: 2000,
        });
      }
    );
  }

  setTable(data: any) {
    this.loading = false;
    this.tableCount = data.json().count;
  }

  changeCheckbox(event: any, i: number) {
    this.checkedMap[i] = event.checked;
  }

  checkAll(event: any) {
    for (let i = 0; i < parseInt(this.perPage, 2) - 1; i++) {
      this.checkedMap[i] = event.checked;
    }
  }

  formChanges(changes: any) {
    this.formFilters = changes;
  }

  search() {
    this.filterTable();
  }

  openAddDialog() {

    const questions = this.buildQuestions.build(this.editProperties, null)

    this.addDialog = this.dialog.open(AddDialogComponent, {
      disableClose: false,
      data: {
        title: this.title
      }
    });

    this.addDialog.componentInstance.setQuestions(questions)

    this.addDialog.afterClosed()
      .subscribe(result => {
        this.apiService.create(this.apiRoute, result).subscribe(
          (res: any) => {
            this.addRecord(result)
            this.successSnack(`Successfully created a ${this.title}`)
          },
          (err: any) => this.errorSnack(err)
        );
      });
  }

  addRecord(record: any) {
    this.data.splice(0, 0, record);
    this.tableCount++;

    if (this.data.length > parseInt(this.selectedPageNum) ) {
      this.data.splice(this.data.length + 1, 1);
    }
  }

  openEditDialog(index: number) {
    this.editIndex = index;
    const questions = this.buildQuestions.build(this.editProperties, this.data[index])

    this.editDialog = this.dialog.open(EditDialogComponent, {
      disableClose: false,
      data: {
        title: this.title
      }
    });

    this.editDialog.componentInstance.editQuestions = questions;

    this.editDialog.afterClosed().subscribe(result => {
      if (result) {

        this.apiService.update(this.apiRoute, result).subscribe(
          (res: any) => {
            this.data.splice(this.editIndex, 1, result)
            this.successSnack(`${this.title} was successfully saved`);
          },
          (err: any) => this.errorSnack(err)
        );
      }
    });
  }

  openDeleteDialog(index: number) {
    this.deleteDialog = this.dialog.open(DeleteDialogComponent, {
      disableClose: false
    });

    this.deleteDialog.afterClosed()
      .subscribe(
        (res: any) => this.successSnack(`Successfully deleted record`),
        (err: any) => this.errorSnack(`Successfully created a ${this.title}`)
      );
  }


  pageLeft() {
    if (this.page > 1) {
      this.page -= 1;
    }

    this.updateTable();
  }

  pageRight() {
    this.page++;
    this.updateTable();
  }

  successSnack(message: string) {
    this.snackBar.open(message, 'Dismiss', {duration: 10000})
    console.log(message);
  }

  errorSnack(error: string) {
    this.snackBar.open(`Error: ${ error }`, 'Dismiss', {duration: 10000})
    console.error(error);
  }

}
