import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password: ['', [Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/)]]
  })
  constructor (private fb:FormBuilder){

  }

  get email(){
    return this.loginForm.controls ['email'];
  }
  get password(){
    return this.loginForm.controls['password']    
  }

  getPasswordError() {
    if (this.password.hasError('required')) {
      return 'La contraseña es requerida.';
    }
    if (this.password.hasError('minlength')) {
      return 'La contraseña debe tener al menos 8 caracteres.';
    }
    if (this.password.hasError('pattern')) {
      return 'La contraseña debe tener al menos una letra minúscula, una mayúscula y un carácter especial.';
    }
    return '';
  }
}
