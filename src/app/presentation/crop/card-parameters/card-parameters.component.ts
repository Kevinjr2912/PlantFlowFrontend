import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card-parameters',
  templateUrl: './card-parameters.component.html',
  styleUrl: './card-parameters.component.css'
})
export class CardParametersComponent implements OnChanges {
  @Input() parameters: any;
  @Output() saveParameters = new EventEmitter<any>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['parameters']) {
      console.log("Parámetros recibidos:", this.parameters);
    }
  }


  updateParameters() {
    this.saveParameters.emit(this.parameters);
  }
}
