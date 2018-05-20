import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {UserListService} from '../user-list.service';
import {User} from '../user.model';
import {AppStateService} from '../app-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  currentPage: number;
  numberOfPages = 100;

  constructor(
    private appState: AppStateService
  ) { }

  ngOnInit() {
    this.currentPage = this.appState.page;
    this.appState.subj.subscribe(
      (value: string) => {
        this.currentPage = this.appState.page;
      }
    );

    this.appState.filterComplete.subscribe(
      (value: string) => {
        this.numberOfPages = Math.floor((this.appState.sortedList.length) / 5)
      }
    );
  }
}
