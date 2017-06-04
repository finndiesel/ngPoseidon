import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../../dynamic-form/question-base';
import { QuestionControlService } from '../../dynamic-form/question-control.service';

@Component({
  selector: 'add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

  questions: any;
  newQuestions: QuestionBase<any>[] = [];
  form: FormGroup;
  type: string = '';

  constructor(public dialogRef: MdDialogRef<AddDialogComponent>, private qcs: QuestionControlService) {
  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.newQuestions);
  }

  setQuestions(questions: QuestionBase<any>[]) {
    this.newQuestions = questions;
  }

  onSubmit() {
    this.dialogRef.close(this.form.value)
    console.log(JSON.stringify(this.form.value));
  }

}
