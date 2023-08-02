import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { NewsBulletinComponent } from './news-bulletin/news-bulletin.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    ScheduleComponent,
    NewsBulletinComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    RouterModule.forRoot([
      {path: 'contact', component: ContactComponent},
      {path: '', component: HomeComponent},
      {path: 'schedule', component: ScheduleComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
