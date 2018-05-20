import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  constructor(private http: HttpClient) {
  }

  fetchUserList() {
    return this.http.get('http://demo9197058.mockable.io/users');
  }


}
