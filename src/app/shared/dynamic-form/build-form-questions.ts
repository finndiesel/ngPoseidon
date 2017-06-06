import { Injectable } from '@angular/core';
import { QuestionBase } from './question-base';
import { CheckboxQuestion } from './question-checkbox';
import { DateQuestion } from './question-date';
import { DropdownQuestion } from './question-dropdown';
import { DisciplinesQuestion } from './question-disciplines';
import { FileQuestion } from './question-file';
import { ImageQuestion } from './question-image';
import { TextboxQuestion } from './question-textbox';
import { IdQuestion } from './question-id';
import { WizwigQuestion } from './question-wizwig';

@Injectable()
export class BuildFormQuestions {
  public build(inputs: Array<any>, data: any): QuestionBase<any>[] {
    const questions: QuestionBase<any> [] = []
    let question: QuestionBase<any>;

    if (!data) {
      data = {};
    }

    questions.push(new IdQuestion({
      key: 'id',
      value: data.id
    }))

    for (const input of inputs) {
      switch (input.type) {

        case 'checkbox':
          question = new CheckboxQuestion({
            key: input.key,
            label: input.label,
            value: data[input.key],
            required: input.required,
        })
        break;

        case 'date':
          question = new DateQuestion({
            key: input.key,
            label: input.label,
            value: data[input.key],
            required: input.required
          });
        break;

        case 'disciplines':
          question = new DisciplinesQuestion({
            key: input.key,
            label: input.label,
            value: data[input.key],
            required: input.required,
            options: input.options
        });
        break;

        case 'file':
          question = new FileQuestion({
            key: input.key,
            label: input.label,
            value: data[input.key],
            required: input.required,
            options: input.options
          });
        break;

        case 'image':
          question = new ImageQuestion({
            key: input.key,
            label: input.label,
            value: data[input.key],
            required: input.required,
            options: input.options
          });
          break;

        case 'options':
          question = new DropdownQuestion({
          key: input.key,
          label: input.label,
          value: data[input.key],
          options: input.options,
          required: input.required,
        });
        break;

        case 'text':
          question = new TextboxQuestion({
            key: input.key,
            label: input.label,
            value: data[input.key],
            required: input.required,
        });
        break;

        case 'wizwig':
          question = new WizwigQuestion({
          key: input.key,
          label: input.label,
          value: data[input.key],
          required: input.required,
        })
        break;


        default:
          console.error('This question type is not supported. You need to add a new case to the build-form-questions.ts file');
      }

      questions.push(question);
    }

    return questions;
  }
}
