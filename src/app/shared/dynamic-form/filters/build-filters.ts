import { BaseFilter } from './base.filter';
import { SelectFiler } from './select.filter';
import { TextboxFilter } from './textbox.filter';
import { QuestionBase } from '../question-base';
import { CheckboxQuestion } from '../question-checkbox';
import { DisciplinesQuestion } from '../question-disciplines';
import { DropdownQuestion } from '../question-dropdown';
import { TextboxQuestion } from '../question-textbox';

export class BuildFilters {
  build(inputs: Array<any>): QuestionBase<any>[] {
    const filters: QuestionBase<any> [] = []
    for (const input of inputs) {

      let filter: QuestionBase<any>;

      switch (input.type) {
        case 'checkbox':
          filter = new CheckboxQuestion(input);
          break;

        case 'disciplines':
          filter = new DisciplinesQuestion(input);
          break;

        case 'select':
          filter = new DropdownQuestion(input);
          break;

        case 'textbox':
          filter = new TextboxQuestion(input);
          break;
      }
      filters.push(filter);
    }

    return filters;
  }
}
