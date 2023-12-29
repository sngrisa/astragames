import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from '../interface/user.interface';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  constructor(private fb: FormBuilder) { }

  user!: User;

  formAccount: FormGroup = this.fb.group(
    {
      username: ['', [Validators.minLength(5), Validators.required],],
      email: ['', [Validators.email, Validators.required, Validators.minLength(6)],],
      password: ['', [Validators.minLength(6), Validators.required],],
    }
  );

  submitAccount = () => {
    if (this.formAccount.invalid) {
      this.formAccount.markAllAsTouched();
      return;
    }
    const valueAccount = { ...this.formAccount.value };
    this.user = valueAccount;
    console.log(this.user);
    this.formAccount.reset(
      {
        username: "",
        email: "",
        password: "",
      }
    )
    return this.user;
  }

  getErrors = (field: string) => {
    return this.formAccount.controls[field].invalid && this.formAccount.controls[field].touched;
  }

}
