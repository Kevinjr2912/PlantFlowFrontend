import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ParcelImplementationRepository } from '../../../data/parcel-data/repositories/parcel-implementation.repository';

@Component({
  selector: 'app-form-parcel-f',
  templateUrl: './form-parcel-f.component.html',
  styleUrl: './form-parcel-f.component.css'
})
export class FormParcelFComponent {

  parcel = {
    Id: 0,             
    Id_user: 0,        
    Id_crop: 0,        
    Id_device: '',     
  };

  constructor(
    private parcelService: ParcelImplementationRepository,
    private router: Router
  ) {}

  ngOnInit() {
    
    const userId = localStorage.getItem('id_user');
    const cropId = localStorage.getItem('cropId');
    let deviceId = localStorage.getItem('deviceId');

    if (userId && cropId) {
      this.parcel.Id_user = parseInt(userId, 10);
      this.parcel.Id_crop = parseInt(cropId, 10);
    } else {
      console.error(' Datos incompletos en el localStorage.');
    }

    
    if (!deviceId) {
      deviceId = 'DEV581'; 
      localStorage.setItem('deviceId', deviceId); 
    }

    this.parcel.Id_device = deviceId;
    console.log('Datos del formulario:', this.parcel);
  }

  onSubmit() {
    console.log(' Enviando datos del formulario de parcela:', this.parcel);

    
    this.parcelService.registerParcel(this.parcel).subscribe({
      next: (response) => {
        console.log(' Parcela registrada:', response);
        this.goToNextStep();
      },
      error: (err) => {
        console.error(' Error al registrar parcela:', err);
      }
    });
  }

  goToNextStep() {
    this.router.navigate(['/']);  
  }
}
