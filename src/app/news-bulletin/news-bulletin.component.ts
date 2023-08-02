import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-bulletin',
  templateUrl: './news-bulletin.component.html',
  styleUrls: ['./news-bulletin.component.css']
})
export class NewsBulletinComponent {

  @Input()
  public title: string = 'Example news bulletin post';
  
  @Input()
  public body: string = 'August practices will be taking place at the Gordon JCC. Please check back for updates on September schedule!';  

  constructor() {

  }
}
