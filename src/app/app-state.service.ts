import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {User} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  userList: User[];
  sortedList: User[];
  page = 1;
  lever = false;
  key = '';
  order = '';
  query = '';
  subj: Subject<string> = new Subject();
  searchIt: Subject<string> = new Subject();
  filterComplete: Subject<string> = new Subject<string>();

  constructor() { }

  sortIt(value: string) {
    this.page = 1;
    if (this.lever === false) {
      this.lever = true;
    }
    if (this.key === value && this.order === 'asc') {
      this.order = 'desc';
    } else {
      this.key = value;
      this.order = 'asc';
    }
    this.subj.next('Filter Changed');
  }

  changePage(value: number) {
    this.page = value;
    this.subj.next('Filter Changed');
  }

  setSortedList(value: User[]) {
    this.sortedList = value;
    this.filterComplete.next('filter Complete.');
  }

  setQuery(value: string) {
    this.query = value;
    this.searchIt.next(value);
  }
}
