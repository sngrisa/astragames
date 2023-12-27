import { Component} from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  constructor(private dialogRef: MatDialog, private nativeByRoute: Router){}

  onNoClick(): void {
    this.dialogRef.closeAll();
  }

  goToRegister(): void{
    this.nativeByRoute.navigateByUrl("/register");
    this.dialogRef.closeAll();
  }

}
