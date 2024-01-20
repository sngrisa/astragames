import { Component } from '@angular/core';
import { GameDetails } from './game-info/interface/gameDetails.interface';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  bomberman: GameDetails = {
    desc: `Es una franquicia de videojuegos estratégico-laberínticos originalmente desarrollada por Hudson Soft y actualmente por Konami. 
    El juego original fue desarrollado por Shinichi Nakamoto y fue lanzado en 1983 para PC y posteriormente para Famicom.​ Desde entonces se han lanzado nuevos juegos`,
    year: 1993,
    publisher: "Hudson Soft",
    genre: "Arcade",
    so: "Super Nintendo",
    id: "Bomberman",
    name: "Super Bomberman",
    url: "./assets/bomberman/superbomberman.png",
  }
}
