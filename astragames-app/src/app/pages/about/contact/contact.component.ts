import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { FormContact } from './interfaces/formContact.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {


  formContact: FormContact = {
    subject: "",
    email: "",
    message: "",
  }

  submitContact = (form: NgForm) => {
    if (form.invalid) {
      return;
    }
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Tu mensaje fue enviado con éxito",
      showConfirmButton: false,
      timer: 3000,
      background: "black",
      color: "white"
    });
    form.reset({})
  }

}
