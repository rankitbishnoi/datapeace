import {Component, OnInit} from '@angular/core';
import {User} from '../../user.model';
import {UserListService} from '../../user-list.service';
import {AppStateService} from '../../app-state.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  userList: User[];
  currentPage: number;
  lever: boolean;
  key: string;
  order: string;
  query: string;
  fetchData: () => void;
  initialization: () => void;
  search: (value: string) => void;

  constructor(
    private userListService: UserListService,
    private appState: AppStateService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fetchData = () => {
      this.userListService.fetchUserList().subscribe(
        (result: User[]) => {
          this.userList = result;
          this.appState.userList = result;
          this.appState.setSortedList(result);
        }
      );
    };

    this.initialization = () => {
      this.currentPage = this.appState.page;
      this.key = this.appState.key;
      this.lever = this.appState.lever;
      this.order = this.appState.order;
    };

    this.search = (query: string) => {
      this.currentPage = 1;
      query = query.toLowerCase();
      const newArray = [];
      this.appState.userList.forEach(
        (arr) => {
          if (arr.first_name.toLowerCase().includes(query)) {
            newArray.push(arr);
          }
        }
      );
      this.userList = newArray;
      this.appState.setSortedList(newArray);
    };

    this.fetchData();
    this.initialization();

    this.appState.subj.subscribe(
      (value: string) => {
        this.initialization();
      }
    );

    this.appState.searchIt.subscribe(
      (value: string) => {
        this.currentPage = 1;
        this.appState.page = 1;
        this.query = value;
        this.search(value);
      }
    );
  }

  sortClass(value: string) {
    if (this.key === value) {
      return ' shadow-lg';
    }
  }

  caretClass() {
    if (this.order === 'asc') {
      return 'oi oi-caret-top';
    } else {
      return 'oi oi-caret-bottom';
    }
  }

  sorting(value: number) {
    switch (value) {
      case 1: this.appState.sortIt('first_name');
        break;
      case 2: this.appState.sortIt('last_name');
        break;
      case 3: this.appState.sortIt('company_name');
        break;
      case 4: this.appState.sortIt('city');
        break;
      case 5: this.appState.sortIt('state');
        break;
      case 6: this.appState.sortIt('zip');
        break;
      case 7: this.appState.sortIt('email');
        break;
      case 8: this.appState.sortIt('web');
        break;
      case 9: this.appState.sortIt('age');
        break;
    }
  }

  openUser(user: User) {
    this.router.navigate(['user', user.id]);
  }

}
