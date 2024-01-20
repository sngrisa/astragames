import { Component, Input } from '@angular/core';
import { socialItem } from './interface/socialitem.interface';

@Component({
  selector: 'app-socialitems',
  templateUrl: './socialitems.component.html',
  styleUrls: ['./socialitems.component.scss']
})
export class SocialitemsComponent {

  @Input() socialItem!: socialItem;

}
