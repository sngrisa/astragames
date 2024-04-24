import { Component } from '@angular/core';
import { User } from '../../register/interface/user.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../backend/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recovery-form',
  templateUrl: './recovery-form.component.html',
  styleUrls: ['./recovery-form.component.scss']
})
export class RecoveryFormComponent {

  user!: User;

  constructor(private fb: FormBuilder, private userService: UsersService) { }

  formRecovery: FormGroup = this.fb.group(
    {
      email: ['', [Validators.email, Validators.required, Validators.minLength(6)],],
    }
  );


  submitAccount = () => {
    if (this.formRecovery.invalid) {
      this.formRecovery.markAllAsTouched();
      return;
    }
    const valueAccount = { ...this.formRecovery.value };
    this.user = valueAccount;
    this.userService.postUser(this.user).subscribe(() => this.getNotification());
    this.formRecovery.reset(
      {
        email: "",
      }
    )
  }

  getErrors = (field: string) => {
    return this.formRecovery.controls[field].invalid && this.formRecovery.controls[field].touched;
  }


  getNotification = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Si su correo existe en nuestra base de datos, deberia haber ingreso en su casilla de correo, verificala para más información",
      showConfirmButton: false,
      timer: 3000,
      background: "black",
      color: "white"
    });
  }

}
