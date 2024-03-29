import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../shared/password-match.directives';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.pattern(/^([A-Z][a-z]+)(\s[A-Z][a-z]+)?\s([A-Z][a-z]+)\s([A-Z][a-z]+)$/)]],
    email:['',[Validators.required, Validators.email]],
    password: ['', [Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/)]],
    confirmPassword:['', [Validators.required,]]
  },{
    validators:passwordMatchValidator
  })
  constructor (private fb:FormBuilder){

  }

  get email(){
    return this.registerForm.controls ['email'];
  }
  get password(){
    return this.registerForm.controls['password']    
  }
  get fullName(){
    return this.registerForm.controls['fullName']
  }
  get confirmPassword(){
    return this.registerForm.controls['confirmPassword']
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
