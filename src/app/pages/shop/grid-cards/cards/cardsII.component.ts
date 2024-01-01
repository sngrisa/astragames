import { Component, Input } from '@angular/core';
import { imageCard } from 'src/app/pages/games/gamescards/data/imageCard.interface';

@Component({
  selector: 'app-cardsII',
  templateUrl: './cardsII.component.html',
  styleUrls: ['./cardsII.component.scss']
})
export class CardsIIComponent {

  @Input() card!: imageCard; 

}
