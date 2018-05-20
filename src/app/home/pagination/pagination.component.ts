import {Component, OnInit} from '@angular/core';
import {AppStateService} from '../../app-state.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit{
  numberOfPages = 100;
  currentPage: number;

  constructor(private appState: AppStateService) { }

  ngOnInit() {
    this.currentPage = this.appState.page;

    if (this.appState.sortedList) {
      this.numberOfPages = Math.floor((this.appState.sortedList.length) / 5);
    }

    this.appState.subj.subscribe(
      (value: string) => {
        this.currentPage = this.appState.page;
      }
    );

    this.appState.filterComplete.subscribe(
      (value: string) => {
        this.numberOfPages = Math.floor((this.appState.sortedList.length) / 5);
      }
    );
  }

  range() {
    return  Array.from(Array(this.numberOfPages), ( x, i ) => i + 1);
  }

  pageLink(page: number) {
    if (this.currentPage === page) {
      return ' bg-primary text-light';
    } else {
      return '';
    }
  }

  previous() {
    if (this.currentPage !== 1) {
      this.currentPage = this.currentPage - 1;
      this.appState.changePage(this.currentPage);
    }
  }

  next() {
    if (this.currentPage !== this.numberOfPages) {
      this.currentPage = this.currentPage + 1;
      this.appState.changePage(this.currentPage);
    }
  }

  newPage(page: number) {
    this.currentPage = page;
    this.appState.changePage(this.currentPage);
  }

}
