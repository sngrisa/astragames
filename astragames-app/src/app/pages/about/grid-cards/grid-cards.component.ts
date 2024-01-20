import { Component, Input } from '@angular/core';
import { PlusPoints } from './interface/plusPoints.interface';

@Component({
  selector: 'app-grid-cards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.scss']
})
export class GridCardsComponent {

  @Input() point!: PlusPoints;

}
