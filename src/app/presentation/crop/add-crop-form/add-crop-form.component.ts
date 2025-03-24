import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-crop-form',
  templateUrl: './add-crop-form.component.html',
  styleUrl: './add-crop-form.component.css'
})
export class AddCropFormComponent {

    cropTypes = ['Legumbres'];
    parcelName= ["Mi cultivito1"];
  
  
    constructor(private router: Router) {}
  
    saveCrop() {
      console.log("Cultivo guardado");
      this.router.navigate(['/crop']);
    }
  
    cancel() {
      this.router.navigate(['/crop']);
    }
    
}
