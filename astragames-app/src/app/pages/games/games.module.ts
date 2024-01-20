import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { GamesComponent } from './games.component';
import { GamescardsComponent } from './gamescards/gamescards.component';
import { CardComponent } from './gamescards/card/card.component';
import { GamesRoutingModule } from './games-routing.module';
import { GameInfoComponent } from './game/game-info/game-info.component';



@NgModule({
  declarations: [
    GameComponent,
    GamesComponent,
    GamescardsComponent,
    CardComponent,
    GameInfoComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule
  ],
  exports:
  [
    GameComponent,
    GamesComponent
  ]
})
export class GamesModule { }
