import { Component } from '@angular/core';
import { ParcelMinInfoModel } from '../../../domain/models/Parcel/parcelMinInfo.model';
import { ParcelImplementationRepository } from '../../../data/parcel-data/repositories/parcel-implementation.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'card-parcel',
  templateUrl: './card-parcel.component.html',
  styleUrl: './card-parcel.component.css'
})
export class CardParcelComponent {

  parcelas: ParcelMinInfoModel[] = []; 

  constructor(private parcelService: ParcelImplementationRepository, private router: Router) {}

  ngOnInit() {
    const userId = 10; 
    this.parcelService.getParcels(userId).subscribe({
      next: (data) => {
        console.log(" datos recibidos de la api:", data); 
        this.parcelas = data; 
      },
      error: (err) => console.error(" error:", err)
    });
  }

  verDetalleParcela(id: number) {
    console.log("Redirigiendo a detalle de parcela con ID:", id);
    this.router.navigate(['crop/', id]); 
  }
}