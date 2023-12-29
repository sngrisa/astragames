import { Component, Input } from '@angular/core';
import { GameDetails } from './interface/gameDetails.interface';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent {

  @Input() gameDetails!: GameDetails; 

}
