import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from './question-base';
@Component({
  selector: 'df-question',
  templateUrl: './dynamic-form-question.component.html',
  styles: [`
    .question { margin: 32px 0; } .hidden { visibility: hidden; height: 0; width: 0; margin: 0; overflow: hidden;}
    label.wizwig { color: rgba(0, 0, 0, 0.38); display: block; font-size: 16px; padding-bottom: 4px; };
  `],
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  get isValid() { return this.form.controls[this.question.key].valid; }
}
