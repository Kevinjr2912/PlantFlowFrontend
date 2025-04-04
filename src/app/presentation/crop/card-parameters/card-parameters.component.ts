import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card-parameters',
  templateUrl: './card-parameters.component.html',
  styleUrl: './card-parameters.component.css'
})
export class CardParametersComponent implements OnChanges {
  @Input() parameters: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['parameters']) {
      console.log("Parámetros recibidos:", this.parameters);
    }
  }

  updateParameters() {
   console.log("Parámetros actualizados:", this.parameters);
  }
}
