import { Component, OnInit } from '@angular/core';
import { imageCard } from '../../games/gamescards/data/imageCard.interface';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-grid-cardsII',
  templateUrl: './grid-cardsII.component.html',
  styleUrls: ['./grid-cardsII.component.scss']
})
export class GridCardsIIComponent implements OnInit {

  constructor(private cardsIIService: GamesService) { }

  cards2: imageCard[] = [];

  ngOnInit(): void {
    this.cardsIIService.getGames('bomberman').subscribe((data: imageCard[]) => this.cards2 = data);
  }

}
