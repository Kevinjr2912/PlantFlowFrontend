import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.css'
})
export class SettingsPageComponent {
  formUserSettings: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formUserSettings = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  hasErrors(controlName: string, errorType: string) {
    return (
      this.formUserSettings.get(controlName)?.hasError(errorType) &&
      this.formUserSettings.get(controlName)?.touched
    );
  }

  onSubmitUserSettings() {
    if (this.formUserSettings.valid) {
      console.log("Formulario enviado con éxito", this.formUserSettings.value);
    } else {
      console.log("Formulario inválido");
    }
  }
}
