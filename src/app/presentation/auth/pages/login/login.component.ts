import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccessCredentials } from '../../../../domain/models/User/access-credentials.model';
import { UserImplementationRepository } from '../../../../data/user-data/repositories/user-implementation.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  accessCredentials: AccessCredentials = {
    Email: "",
    Password: ""
  }

  constructor(
    private fb: FormBuilder,
    private userImplementation: UserImplementationRepository,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  
  hasErrors(controlName: string, errorType: string) {
    return (
      this.loginForm.get(controlName)?.hasError(errorType) &&
      this.loginForm.get(controlName)?.touched
    );
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.accessCredentials = {
        Email: this.loginForm.value.email,
        Password: this.loginForm.value.password
      };

      this.userImplementation.login(this.accessCredentials).subscribe({
        next: (data) => {
          console.log("Datos recibidos de la API:", data)

          const { password, ...userWithoutPassword } = data;
          localStorage.setItem('user', JSON.stringify(userWithoutPassword));

          localStorage.setItem('token', password);

          this.router.navigate(['/parcel']);
        },
        error: (err) => console.log("Error:", err)
      })

      console.log('logeado:', this.loginForm.value);
    }
  }
}