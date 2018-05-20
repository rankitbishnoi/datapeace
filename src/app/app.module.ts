import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing.module';
import {PaginationPipe} from './pipes/pagination.pipe';
import {SortPipe} from './pipes/sort.pipe';
import {PaginationComponent} from './home/pagination/pagination.component';
import {UserTableComponent} from './home/user-table/user-table.component';
import {SearchComponent} from './home/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaginationComponent,
    UserTableComponent,
    SearchComponent,
    UserComponent,
    PaginationPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
