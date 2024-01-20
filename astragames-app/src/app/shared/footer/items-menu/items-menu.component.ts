import { Component, Input } from '@angular/core';
import { menuFooter } from '../data/itemsFoooter.interface';

@Component({
  selector: 'app-items-menu',
  templateUrl: './items-menu.component.html',
  styleUrls: ['./items-menu.component.scss']
})
export class ItemsMenuComponent {

  @Input() item!: menuFooter;

}
