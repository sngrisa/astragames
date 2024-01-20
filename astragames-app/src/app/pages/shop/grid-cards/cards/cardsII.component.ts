import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { imageCard } from 'src/app/pages/games/gamescards/data/imageCard.interface';
import { ItemsComponent } from '../../items/items.component';

@Component({
  selector: 'app-cardsII',
  templateUrl: './cardsII.component.html',
  styleUrls: ['./cardsII.component.scss']
})
export class CardsIIComponent {

  @Input() card!: imageCard; 

  constructor(private dialog: MatDialog) { }

  openDialog() {

    this.dialog.open(ItemsComponent, {
      height: '765px',
      width: '600px',
    });
}

}
