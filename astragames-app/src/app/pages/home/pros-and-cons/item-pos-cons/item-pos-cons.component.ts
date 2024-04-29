import { Component, Input } from '@angular/core';
import { PosAndConsItem } from './interfaces/ItemProsAndCons.interface';

@Component({
  selector: 'app-item-pos-cons',
  templateUrl: './item-pos-cons.component.html',
  styleUrls: ['./item-pos-cons.component.scss']
})
export class ItemPosConsComponent {

  @Input() pro!: PosAndConsItem;

}
