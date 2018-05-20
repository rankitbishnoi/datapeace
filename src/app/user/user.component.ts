import { Component, OnInit } from '@angular/core';
import {UserListService} from '../user-list.service';
import {AppStateService} from '../app-state.service';
import {User} from '../user.model';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  constructor(
    private userListService: UserListService,
    private appState: AppStateService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        if (this.appState.userList) {
          this.appState.userList.forEach((user) => {
            if (user.id === parseInt(params.id, 10)) {
              this.user = user;
            }
          });
        } else {
          this.userListService.fetchUserList().subscribe(
            (users: User[]) => {
              users.forEach((user) => {
                if (user.id === parseInt(params.id, 10)) {
                  this.user = user;
                }
              });
            }
          );
        }
    });
  }

}
