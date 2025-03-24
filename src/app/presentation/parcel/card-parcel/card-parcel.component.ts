import { Component } from '@angular/core';

@Component({
  selector: 'card-parcel',
  templateUrl: './card-parcel.component.html',
  styleUrl: './card-parcel.component.css'
})
export class CardParcelComponent {







  parcelas = [
    {
      nombre: "PARCELA 1",
      tipoCultivo: "LEGUMBRES",
      estadoCultivo: "GERMINACIÓN",
      dispositivo: "ROBOT298N",
      imgParcela: "assets/Parcel.svg",
      imgCultivo: "assets/TypeCrop.svg",
      imgEstado: "assets/StateCrop.svg",
      imgDispositivo: "assets/Device.svg",
    },
    {
      nombre: "PARCELA 2",
      tipoCultivo: "FRUTALES",
      estadoCultivo: "CULTIVO",
      dispositivo: "ROBOT400X",
      imgParcela: "assets/Parcel.svg",
      imgCultivo: "assets/TypeCrop.svg",
      imgEstado: "assets/StateCrop.svg",
      imgDispositivo: "assets/Device.svg",
    }
  ];

}
