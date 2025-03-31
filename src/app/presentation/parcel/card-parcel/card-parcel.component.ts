import { Component } from '@angular/core';
import { ParcelMinInfoModel } from '../../../domain/models/Parcel/parcelMinInfo.model';
import { ParcelImplementationRepository } from '../../../data/parcel-data/repositories/parcel-implementation.repository';

@Component({
  selector: 'card-parcel',
  templateUrl: './card-parcel.component.html',
  styleUrl: './card-parcel.component.css'
})
export class CardParcelComponent {

  parcelas: ParcelMinInfoModel[] = []; 

  constructor(private parcelService: ParcelImplementationRepository) {}

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
}