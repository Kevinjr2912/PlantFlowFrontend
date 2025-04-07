import { Component, OnInit } from '@angular/core';
import { ParameterImplementationRepository } from '../../../data/parameters-data/repositories/parameters-implementation-repository';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-parameters',
  templateUrl: './form-parameters.component.html',
  styleUrl: './form-parameters.component.css'
})
export class FormParametersComponent implements OnInit {

  parametersForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private parameterService: ParameterImplementationRepository,
    private router: Router
  ) {}

  ngOnInit() {
    
    this.parametersForm = this.fb.group({
      humidity_min: [0, [Validators.required]],
      humidity_max: [0, [Validators.required]],
      temp_min: [0, [Validators.required]],
      temp_max: [0, [Validators.required]],
      max_air_con: [0, [Validators.required]]
    });
  }

  hasErrors(controlName: string, errorType: string): boolean {
    const control = this.parametersForm.get(controlName);
    if (!control) return false;
    
    return control.hasError(errorType) && (control.dirty || control.touched);
  }

  onSubmit() {
    if (this.parametersForm.valid) {
      const parameters = this.parametersForm.value;

      this.parameterService.registerParameters(parameters).subscribe(response => {
        const cultivationParameterId = response.id;
        this.saveCultivationParameterId(cultivationParameterId);
        this.goToNextStep();
      });
    }
  }

  saveCultivationParameterId(id: number) {
    localStorage.setItem('cultivationParameterId', id.toString());
    console.log('Cultivation Parameter ID saved:', id);
  }

  goToNextStep() {
    this.router.navigate(['/parcel/add/2']);
  }
}