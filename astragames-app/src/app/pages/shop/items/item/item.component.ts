import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  constructor(private dialogRef: MatDialog){}

  @Input() item!: any;

  closeItemShop = () => {
    this.dialogRef.closeAll();
  }

}
