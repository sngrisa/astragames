import { Component, Input } from '@angular/core';
import { News } from './interface/news.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  @Input() new!: News;

}
