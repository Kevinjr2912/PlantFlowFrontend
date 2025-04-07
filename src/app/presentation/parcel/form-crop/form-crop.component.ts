import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CropImplementationRepository } from '../../../data/crop-data/repositories/crop-implementation.repository';


@Component({
  selector: 'app-form-crop',
  templateUrl: './form-crop.component.html',
  styleUrl: './form-crop.component.css'
})
export class FormCropComponent implements OnInit {

hasErrors(arg0: string,arg1: string): any {
throw new Error('Method not implemented.');
}

  crop = {
    id: 0, 
    crop_name: '',
    id_cultivation_parameter: 0, 
    id_crop_type: 0,  
  };

 

  cropTypes = [ 
    { id: 1, name: 'legumbres' },
    { id: 2, name: 'peras' },
    { id: 3, name: 'tomato' },
    
  ];


  

  constructor(
  private cropService: CropImplementationRepository, 
  private router: Router) {}

  ngOnInit() {
    const cultivationParameterId = localStorage.getItem('cultivationParameterId');
    if (cultivationParameterId) {
      this.crop.id_cultivation_parameter = parseInt(cultivationParameterId, 10);
    }
  }

  onSubmit() {
    this.crop.id_crop_type = +this.crop.id_crop_type; 
    
    console.log('Enviando datos del formulario:', this.crop); 
  
    this.cropService.registerCrop(this.crop).subscribe({
      next: (response) => {
        console.log('Cultivo registrado:', response);

        
        localStorage.setItem('cropId', response.id.toString());
        console.log('Cultivo ID guardado en localStorage:', response.id);

        this.goToNextStep();
      },
      error: (err) => {
        console.error('Error al registrar cultivo:', err);
      }
    });
  }

  goToNextStep() {
    
    this.router.navigate(['/parcel/add/3']);
  }
}
