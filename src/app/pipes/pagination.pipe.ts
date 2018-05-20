import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pagination',
  pure: false
})
export class PaginationPipe implements PipeTransform{
  transform(array, currentPage: number, value: string) {
    if (value === 'data') {
      return array.slice(((currentPage - 1) * 5), currentPage * 5);
    } else if (value === 'pageNumber') {
      if (array.length - currentPage < 9) {
        return array.slice((array.length - 9), array.length);
      } else {
        return array.slice((currentPage - 1), currentPage + 8);
      }
    }
  }
}
