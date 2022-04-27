import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[],
     text: string,
     columb: string): any[] {

    if(text === ''){
      return array;
    }

    text = text.toLocaleLowerCase();

    return array.filter( item => item[columb].toLowerCase()
      .includes(text));
  }

}
