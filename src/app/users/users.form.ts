import { Injectable } from '@angular/core';
import { QuestionBase } from '../shared/dynamic-form/question-base';
import { DropdownQuestion } from '../shared/dynamic-form/question-dropdown';
import { IdQuestion } from '../shared/dynamic-form/question-id';
import { TextboxQuestion } from '../shared/dynamic-form/question-textbox';
import { BuildFormQuestions } from '../shared/dynamic-form/build-form-questions';
import {DisciplinesQuestion} from "../shared/dynamic-form/question-disciplines";

@Injectable()
export class UserFormQuestions {
  build(user?: any): QuestionBase<any>[] {
    // if (!user) {
    //   console.log('The UserFormQuestions Fucked Up');
    //   return [];
    // }
    const questions: QuestionBase<any> [] = [

      new IdQuestion({
        key: 'id',
        label: 'id',
        value: user ? user.id : ''
      }),

      new TextboxQuestion({
        key: 'display_name',
        label: 'Display Name',
        value: user ? user.display_name : '',
        required: true,
      }),

      new TextboxQuestion({
        key: 'current_employer',
        label: 'Current Employer',
        value: user ? user.current_employer : '',
        required: true,
      }),

      new TextboxQuestion({
        key: 'current_position',
        label: 'Current Position',
        value: user ? user.current_position : '',
        required: false,
      }),

      new DisciplinesQuestion({
        key: 'disciplines',
        label: 'Disciplines',
        required: false
      }),

      // new DropdownQuestion({
      //   key: 'position_type',
      //   label: 'Position Type',
      //   options: [
      //     {key: 1, value: 'Faculty & Research'},
      //     {key: 88, value: 'Administrative'},
      //     {key: 147, value: 'Executive'},
      //     {key: 176, value: 'Jobs Outside Academe'},
      //   ]
      // }),
    ];

    return questions;
  }
}
