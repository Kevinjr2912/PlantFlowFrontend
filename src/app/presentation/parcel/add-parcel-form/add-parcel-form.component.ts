import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-parcel-form',
  templateUrl: './add-parcel-form.component.html',
  styleUrl: './add-parcel-form.component.css'
})
export class AddParcelFormComponent {

  cropTypes = ['Legumbres', 'Frutales', 'Hortalizas'];
  growthStates = ['Germinación', 'Crecimiento', 'Cosecha'];

  constructor(private router: Router) {}

  saveParcel() {
    console.log("Parcela guardada");
    this.router.navigate(['/parcel']);
  }

  cancel() {
    this.router.navigate(['/parcel']);
  }

}