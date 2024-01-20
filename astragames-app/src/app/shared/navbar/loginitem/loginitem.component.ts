import { Component, Input } from '@angular/core';
import { menuItem } from '../menu-items/data/item';
import { MatDialog } from "@angular/material/dialog";
import { LoginComponent } from 'src/app/login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginitem',
  templateUrl: './loginitem.component.html',
  styleUrls: ['./loginitem.component.scss']
})
export class LoginitemComponent {

  constructor(private dialog: MatDialog, private router: Router) { }

  @Input() item!: menuItem;
  idUser: string = "";

  openDialog() {
    return (this.item.url == "/login") ? this.dialog.open(LoginComponent, { height: '650px', width: '450px' }) : this.router.navigateByUrl(`/cart/${this.idUser}`);
  }


}
