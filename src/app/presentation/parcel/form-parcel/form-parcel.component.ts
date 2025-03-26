import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-parcel',
  templateUrl: './form-parcel.component.html',
  styleUrl: './form-parcel.component.css'
})
export class FormParcelComponent {
 @Output() nextStep = new EventEmitter<void>();
  @Output() previousStep = new EventEmitter<void>();

  currentStep = 1;
  formLost: FormGroup;
  cropTypes = ['Legumbres', 'Frutales', 'Hortalizas'];
  growthStates = ['Germinación', 'Crecimiento', 'Cosecha'];

  constructor(private formBuilder: FormBuilder) {
    this.formLost = this.formBuilder.group({
      parcelName: ['', Validators.required],
      cropType: ['', Validators.required],
      growthStates: ['', Validators.required],
      cropName: ['', Validators.required],
      maxHumidity: ['', Validators.required],
      minHumidity: ['', Validators.required],
      maxTemperature: ['', Validators.required],
      minTemperature: ['', Validators.required],
      maxAirQuality: ['', Validators.required],
      minAirQuality: ['', Validators.required],
    });
  }

  onNext() {
    if (this.currentStep < 2) this.currentStep++;
  }

  onBack() {
    if (this.currentStep > 1) this.currentStep--;
  }

  hasErrors(controlName: string, errorType: string) {
    return this.formLost.get(controlName)?.hasError(errorType) && this.formLost.get(controlName)?.touched;
  }

  onSubmitFormLost() {
    console.log("Formulario enviado", this.formLost.value);
  }
} 