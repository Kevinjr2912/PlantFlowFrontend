import { Component } from '@angular/core';

@Component({
  selector: 'app-crop-page',
  templateUrl: './crop-page.component.html',
  styleUrl: './crop-page.component.css',
})
export class CropPageComponent {
  // boton para cambiar de pestaña
  selectedButton: string = 'estadisticas';

  selectButton(button: string): void {
    this.selectedButton = button;
    console.log(this.selectedButton);
  }

  
}
