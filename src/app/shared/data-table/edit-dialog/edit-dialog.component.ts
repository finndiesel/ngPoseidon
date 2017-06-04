import { Component, OnInit }         from '@angular/core';
import { MdDialogRef }               from '@angular/material';
import { FormGroup }                 from '@angular/forms';
import { QuestionBase }              from '../../dynamic-form/question-base';
import { QuestionControlService }    from '../../dynamic-form/question-control.service';

@Component({
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  editQuestions: QuestionBase<any>[] = [];
  form: FormGroup;
  type: string = '';

  constructor(public dialogRef: MdDialogRef<EditDialogComponent>, private qcs: QuestionControlService) {
  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.editQuestions);
  }

  onSubmit() {
    this.dialogRef.close(this.form.value)
    console.log(this.form);
  }

}
