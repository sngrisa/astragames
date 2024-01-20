import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../interface/user.interface';
import Swal from "sweetalert2";
import { UsersService } from '../../backend/services/users.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  constructor(private fb: FormBuilder, private userService: UsersService) { }

  user!: User;

  formAccount: FormGroup = this.fb.group(
    {
      username: ['', [Validators.minLength(5), Validators.required],],
      email: ['', [Validators.email, Validators.required, Validators.minLength(6)],],
      password: ['', [Validators.minLength(6), Validators.required],],
      confirmPassword: ['', [Validators.minLength(6), Validators.required],],
      status: [true],
    }
  );


  submitAccount = () => {
    if (this.formAccount.invalid) {
      this.formAccount.markAllAsTouched();
      return;
    }
    const valueAccount = { ...this.formAccount.value };
    this.user = valueAccount;
    this.userService.postUser(this.user).subscribe(() => this.getNotification());
    this.formAccount.reset(
      {
        username: "",
        email: "",
        password: "",
      }
    )
  }

  getErrors = (field: string) => {
    return this.formAccount.controls[field].invalid && this.formAccount.controls[field].touched;
  }


  getNotification = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Usuario Creado Con Éxito",
      showConfirmButton: false,
      timer: 3000,
      background: "black",
      color: "white"
    });
  }


}
