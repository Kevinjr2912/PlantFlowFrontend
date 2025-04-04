import { Component, Input, OnInit } from '@angular/core';
import { DeviceModel } from '../../../domain/models/Device/device.model';

@Component({
  selector: 'app-card-my-crop',
  templateUrl: './card-my-crop.component.html',
  styleUrl: './card-my-crop.component.css'
})
export class CardMyCropComponent implements OnInit{

  ngOnInit() {
    if (this.device?.Installation_date) {
      this.device.Installation_date = new Date(this.device.Installation_date);
    }
    if (this.device?.Maintenance_date) {
      this.device.Maintenance_date = new Date(this.device.Maintenance_date);
    }
  }
  

  @Input() device!: DeviceModel | null;
  @Input() cropType!: any; 
  
}
