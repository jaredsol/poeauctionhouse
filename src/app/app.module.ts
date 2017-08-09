import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavBarComponent} from './navbar.component';
import {AuctionFormComponent} from './auctionform.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LeagueService} from './services/league.service';
import {TypeService} from './services/type.service';
import {BaseService} from './services/base.service';
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AuctionFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    LeagueService,
    TypeService,
    BaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
