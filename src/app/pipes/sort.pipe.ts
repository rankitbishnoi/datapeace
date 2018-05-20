import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform{
  transform(array, lever: boolean, keys: string, orders: string) {
    function compare(key, order= 'asc') {
      return function(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
          return 0;
        }

        const varA = (typeof a[key] === 'string') ?
          a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string') ?
          b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
          comparison = 1;
        } else if (varA < varB) {
          comparison = -1;
        }
        return (
          (order === 'desc') ? (comparison * -1) : comparison
        );
      };
    }
    if (lever === true) {
      return array.sort(compare(keys, orders));
    } else {
      return array;
    }
  }
}
