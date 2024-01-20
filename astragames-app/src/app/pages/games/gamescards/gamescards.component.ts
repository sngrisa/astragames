import { Component, OnInit } from '@angular/core';
import { imageCard } from './data/imageCard.interface';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-gamescards',
  templateUrl: './gamescards.component.html',
  styleUrls: ['./gamescards.component.scss']
})
export class GamescardsComponent implements OnInit {

  cards: imageCard[] = [];
  cards2: imageCard[] = [];

  constructor(private gamesService: GamesService){}

  ngOnInit(): void {
    this.gamesService.getGames('bomberman').subscribe((data: imageCard[])=> this.cards = data);
    this.gamesService.getGames('finalfantasy').subscribe((data: imageCard[])=> this.cards2 = data);
  }
}

