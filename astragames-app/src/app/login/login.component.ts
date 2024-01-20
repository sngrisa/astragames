import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsersService } from '../pages/backend/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private dialogRef: MatDialog, private nativeByRoute: Router, private usersService: UsersService) { }

  onNoClick(): void {
    this.dialogRef.closeAll();
  }

  goToRegister(): void {
    this.nativeByRoute.navigateByUrl("/register");
    this.dialogRef.closeAll();
  }

  goToLogin = () => {
    this.usersService.getUsers().subscribe((resp: any)=> {
      if(resp==201){
        this.getNotification();
        this.nativeByRoute.navigateByUrl("/home");
      }else{
        this.errNotification();
      }
    });
  }

  getNotification = (): void => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Logueo Con Éxito",
      showConfirmButton: false,
      timer: 3000,
      background: "gray",
      color: "white"
    });
  }

  errNotification = (): void => {
    Swal.fire({
      icon: "error",
      title: "Error al iniciar sesión",
      text: "Nombre de usuario o contraseña incorrectos!",
    });
  }

}
