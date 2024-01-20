import { Component, Input } from '@angular/core';
import { imageCard } from '../data/imageCard.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() card!: imageCard;

}
