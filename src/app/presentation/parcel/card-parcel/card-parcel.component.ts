import { Component } from '@angular/core';
import { ParcelMinInfoModel } from '../../../domain/models/Parcel/parcelMinInfo.model';
import { ParcelImplementationRepository } from '../../../data/parcel-data/repositories/parcel-implementation.repository';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/pages/service/auth.service';

@Component({
  selector: 'card-parcel',
  templateUrl: './card-parcel.component.html',
  styleUrl: './card-parcel.component.css'
})
export class CardParcelComponent {

  userId: number | null = null;
  userEmail: string | null = null;

  parcelas: ParcelMinInfoModel[] = []; 

  constructor(
  private parcelService: ParcelImplementationRepository, 
  private router: Router,
  private authService: AuthService,
  ) {}

  ngOnInit() {

    const userId = this.authService.getUserId();
    const email = this.authService.getUserEmail();
    const userRole = this.authService.getUserRole();

    console.log("userRole:", userRole);
    console.log("userId:", userId);
    console.log("userEmail:", email);  
    
    if (userId !== null) {
      this.parcelService.getParcels(userId).subscribe({
        next: (data) => {
          this.parcelas = data;
        },
        error: (err) => console.error("error:", err)
      });
    } else {
      console.error("No hay usuario logueado.");
    }

    
  }

  verDetalleParcela(id: number) {
    console.log("Redirigiendo a detalle de parcela con ID:", id);
    this.router.navigate(['crop/', id]);
 }
}