import { Component, Input } from '@angular/core';
import { menuItem } from './data/item';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent {

  @Input() item!: menuItem;

}
