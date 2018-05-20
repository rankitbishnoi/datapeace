import { Component, OnInit } from '@angular/core';
import {AppStateService} from '../../app-state.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private appState: AppStateService) { }

  ngOnInit() {
  }

  search(value: string) {
    this.appState.setQuery(value);
  }
}
