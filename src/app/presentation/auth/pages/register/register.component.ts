import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private fb:FormBuilder){
    this.registerForm=this.fb.group({
      firstName:['', [Validators.required]],
      lastName:['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  hasErrors(controlName: string, errorType: string) {
    return (
      this.registerForm.get(controlName)?.hasError(errorType) &&
      this.registerForm.get(controlName)?.touched
    );
  }
  onSubmit() {
    if (this.registerForm.valid) {
      console.log('registro enviado:', this.registerForm.value);
    }
  }
}