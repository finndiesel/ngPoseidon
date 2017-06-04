import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toInt'
})
export class ToIntPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return parseInt(value);
  }

}
