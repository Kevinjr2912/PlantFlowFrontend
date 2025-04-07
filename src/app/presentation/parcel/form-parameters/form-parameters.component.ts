import { Component } from '@angular/core';
import { ParameterImplementationRepository } from '../../../data/parameters-data/repositories/parameters-implementation-repository';

@Component({
  selector: 'app-form-parameters',
  templateUrl: './form-parameters.component.html',
  styleUrl: './form-parameters.component.css'
})
export class FormParametersComponent {

  parameters = {
    id: 0,               
    humidity_min: 0,    
    humidity_max: 0,    
    temp_min: 0,        
    temp_max: 0,        
    max_air_con: 0,     
    
  };

  constructor(private parameterService: ParameterImplementationRepository) {}

  onSubmit() {
   

    // Hacer la solicitud para crear los parámetros de cultivo
    this.parameterService.registerParameters(this.parameters).subscribe(response => {
      const cultivationParameterId = response.id;
      
      // Guarda el ID del parámetro de cultivo para usarlo más tarde
      this.saveCultivationParameterId(cultivationParameterId);

      // Pasar al siguiente paso (por ejemplo, ir a la siguiente página)
      this.goToNextStep();
    });
  }

  saveCultivationParameterId(id: number) {
    // Guardar el ID en el almacenamiento local o un servicio compartido
    localStorage.setItem('cultivationParameterId', id.toString());
    console.log('Cultivation Parameter ID saved:', id);
  }

  goToNextStep() {
    // Aquí redirigirías a la siguiente sección o paso del formulario
    // Por ejemplo:
    // this.router.navigate(['/next-step']);
  }
}