import { QuestionBase } from './question-base';
interface BuildQuestionsBase {
  build(...inputs: any[]): QuestionBase<any>[];
}
