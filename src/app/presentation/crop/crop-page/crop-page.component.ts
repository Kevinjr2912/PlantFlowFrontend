import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceModel } from '../../../domain/models/Device/device.model';
import { DeviceImplementationRepository } from '../../../data/device-data/repositories/device-implementation.repository';

@Component({
  selector: 'app-crop-page',
  templateUrl: './crop-page.component.html',
  styleUrl: './crop-page.component.css',
})
export class CropPageComponent implements OnInit{
  // boton para cambiar de pestaña
  selectedButton: string = 'estadisticas';

  parcelaId!: number;
  deviceData: DeviceModel | null = null;
  
  constructor(
    private route: ActivatedRoute,
    private deviceService: DeviceImplementationRepository,
    
  ) {}


  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.parcelaId = +id;
        //carga los datos de la card mi cultivo
        this.cargarDatosMiCultivo1();
        
      }
    });
  }

  selectButton(button: string): void {
    this.selectedButton = button;
    
    if (this.selectedButton == "mi cultivo"){
      console.log("mi cultivo")
      
    }
    if (this.selectedButton == "estadisticas"){
      console.log("estadisticas")
    }
    if (this.selectedButton == "parametros"){
      console.log("parametros")
    }
    console.log(this.selectedButton);
  }


  cargarDatosMiCultivo1(): void {
    this.deviceService.getDeviceByID('DEV123').subscribe({
      next: (data) => {
        this.deviceData = data;
        console.log('Dispositivo cargado:', this.deviceData);
      },
      error: (err) => console.error('Error al cargar el dispositivo:', err),
    });

    
  }

  cargarEstadisticas(): void {
    
    console.log('Cargando estadísticas...');
  }

  cargarParametrosAmbientales(): void {
    
    console.log('Cargando parámetros ambientales...');
  }
}



