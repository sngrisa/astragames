import { Component, Input } from '@angular/core';
import { menuItem } from '../menu-items/data/item';

@Component({
  selector: 'app-menu-mobile-items',
  templateUrl: './menu-mobile-items.component.html',
  styleUrls: ['./menu-mobile-items.component.scss']
})
export class MenuMobileItemsComponent {
  
  @Input() item!: menuItem;

}
