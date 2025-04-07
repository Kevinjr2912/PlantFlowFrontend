import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ParcelImplementationRepository } from '../../../data/parcel-data/repositories/parcel-implementation.repository';
import { ParcelMinInfo } from '../../../domain/models/Parcel/parcelMinInfo.model';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/pages/service/auth.service';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent implements OnInit {
  parcels: ParcelMinInfo[] = [];
  showUserOptions = false;
  showParcels = false;
  loading = false;
  error = '';

  constructor(
    private parcelService: ParcelImplementationRepository,
     private router: Router,
     private authService: AuthService
    
    ) {}

  ngOnInit() {
    this.loadParcels();
  }

  async loadParcels(): Promise<void> {
    this.loading = true;
    this.error = '';

 
    try {
      const userId = this.authService.getUserId();

      if (!userId) {
        throw new Error('No se pudo obtener el ID del usuario');
      }

      this.parcels = await this.parcelService.getParcels(userId).toPromise() || [];

      if (this.parcels.length === 0) {
        this.error = 'No tienes parcelas registradas';
      }
    } catch (err) {
      console.error('Error al cargar parcelas:', err);
      this.error = 'Error al cargar las parcelas';
      this.parcels = [];
    } finally {
      this.loading = false;
    }
  }


  toggleUserOptions() {
    this.showUserOptions = !this.showUserOptions;
  }

  toggleParcels() {
    this.showParcels = !this.showParcels;
  }


  navigateToParcel(parcelId: number): void {
    this.router.navigate([`/crop/${parcelId}`]); 
  }

  cerrarSesion(): void {
    this.authService.logout(); 
    this.router.navigate(['/login']); 
  }
}