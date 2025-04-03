import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formLost = this.formBuilder.group({
      parcelName: ['', Validators.required],
      cropType: ['', Validators.required],

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
  onReset(){
    this.router.navigate(['/parcel']);
  }

  hasErrors(controlName: string, errorType: string) {
    return this.formLost.get(controlName)?.hasError(errorType) && this.formLost.get(controlName)?.touched;
  }

  onSubmitFormParcel() {
    console.log("Formulario enviado", this.formLost.value);
    this.router.navigate(['/parcel']);
  }
} 