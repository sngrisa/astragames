import { Component, Input } from '@angular/core';
import { menuItem } from '../menu-items/data/item';
import { MatDialog } from "@angular/material/dialog";
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-loginitem',
  templateUrl: './loginitem.component.html',
  styleUrls: ['./loginitem.component.scss']
})
export class LoginitemComponent {

  constructor(private dialog: MatDialog) { }

  @Input() item!: menuItem;

  openDialog() {

    this.dialog.open(LoginComponent, {
      height: '600px',
      width: '450px',
    });
}


}
