import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateUserUseCase } from '../../../../domain/useCases/User/user-create.useCase';
import { UserModel } from '../../../../domain/models/User/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;

  user: UserModel = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  constructor(private fb: FormBuilder, private createUC: CreateUserUseCase) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  hasErrors(controlName: string, errorType: string) {
    return (
      this.registerForm.get(controlName)?.hasError(errorType) &&
      this.registerForm.get(controlName)?.touched
    );
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      //para asignar los valores
      this.user.firstName = this.registerForm.value.firstName;
      this.user.lastName = this.registerForm.value.lastName;
      this.user.email = this.registerForm.value.email;
      this.user.password = this.registerForm.value.password;
  
      // ejecuta el caso de uso 
      this.createUC.execute(this.user).subscribe(
        (response) => {
          console.log('user creado', response);
        },
        (err) => {
          console.log('Error al crear el usuario:', err);
        }
      );
    }
  }
}
