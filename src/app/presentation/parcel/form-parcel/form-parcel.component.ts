import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CropModel } from '../../../domain/models/Crop/crop.model';
import { CropTypeModel } from '../../../domain/models/Crop/crop_type.model';
import { CultivationParametersModel } from '../../../domain/models/Parameters/param.model';
import { ParcelModel } from '../../../domain/models/Parcel/parcel.model';
import { CropImplementationRepository } from '../../../data/crop-data/repositories/crop-implementation.repository';
import { CropTypeImplementationRepository } from '../../../data/crop-data/repositories/cropType-implmentation.repository';
import { ParameterImplementationRepository } from '../../../data/parameters-data/repositories/parameters-implementation-repository';
import { ParcelImplementationRepository } from '../../../data/parcel-data/repositories/parcel-implementation.repository';

@Component({
  selector: 'app-form-parcel',
  templateUrl: './form-parcel.component.html',
  styleUrls: ['./form-parcel.component.css']
})
export class FormParcelComponent {
  formLost: FormGroup;
  currentStep = 1;
  cropTypes: CropTypeModel[] = []; // Cambiado a modelo real
  loading = false;

  constructor(
    private fb: FormBuilder,
    private cropService: CropImplementationRepository,
    private cropTypeService: CropTypeImplementationRepository,
    private parameterService: ParameterImplementationRepository,
    private parcelService: ParcelImplementationRepository
  ) {
    this.formLost = this.fb.group({
      // Paso 1: Datos del cultivo
      cropName: ['', Validators.required],
      cropType: ['', Validators.required],
      maxHumidity: ['', [Validators.required, Validators.min(0)]],
      minHumidity: ['', [Validators.required, Validators.min(0)]],
      maxTemperature: ['', [Validators.required, Validators.min(0)]],
      minTemperature: ['', [Validators.required, Validators.min(0)]],
      maxAirQuality: ['', [Validators.required, Validators.min(0)]],
      
      // Paso 2: Datos de la parcela
      parcelName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadCropTypes();
  }

  async loadCropTypes(): Promise<void> {
    try {
      // Opción 1: Si conoces los IDs de los tipos de cultivo disponibles
      const type1 = await this.cropTypeService.getTypeCrop(1).toPromise();
      const type2 = await this.cropTypeService.getTypeCrop(2).toPromise();
      
      this.cropTypes = [];
      if (type1) this.cropTypes.push(type1);
      if (type2) this.cropTypes.push(type2);
  
      // Opción 2: Si necesitas obtener todos los tipos (requiere implementar nuevo endpoint)
      // this.cropTypes = await this.cropTypeService.getAllCropTypes().toPromise() || [];
  
      // Opción 3: Datos hardcodeados temporalmente (para desarrollo)
      if (this.cropTypes.length === 0) {
        this.cropTypes = [
          { id: 1, crop_type_name: 'Hortalizas', description: 'Cultivos de hortalizas' },
          { id: 2, crop_type_name: 'Frutales', description: 'Árboles frutales' }
        ];
      }
  
      // Establecer valor por defecto si hay tipos disponibles
      if (this.cropTypes.length > 0) {
        this.formLost.get('cropType')?.setValue(this.cropTypes[0].crop_type_name);
      }
    } catch (error) {
      console.error('Error loading crop types:', error);
      // Datos de respaldo
      this.cropTypes = [
        { id: 1, crop_type_name: 'Hortalizas', description: 'Cultivos de hortalizas' },
        { id: 2, crop_type_name: 'Frutales', description: 'Árboles frutales' }
      ];
    }
  }

  
  hasErrors(controlName: string, errorType: string): boolean {
    const control = this.formLost.get(controlName);
    if (!control) return false;
    
    return control.hasError(errorType) && (control.dirty || control.touched);
  }

  markAllAsTouched(): void {
    Object.values(this.formLost.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  onNext(): void {
    // Marcar todos los controles como touched para mostrar errores
    this.markAllAsTouched();
    
    // Verificar solo los controles del paso actual
    if (this.currentStep === 1) {
      const step1Controls = ['cropName', 'cropType', 'maxHumidity', 'minHumidity', 
                           'maxTemperature', 'minTemperature', 'maxAirQuality'];
      
      const step1Valid = step1Controls.every(control => 
        this.formLost.get(control)?.valid
      );

      if (step1Valid) {
        this.currentStep++;
      } else {
        console.log('Formulario inválido', this.formLost.errors);
      }
    }
  }

  onBack(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onReset(): void {
    this.formLost.reset();
    this.currentStep = 1;
  }

  async onSubmitFormParcel(): Promise<void> {
    this.markAllAsTouched();
    
    if (this.formLost.invalid) {
      console.log('Formulario inválido', this.formLost.errors);
      return;
    }

    this.loading = true;

    try {
      // Paso 1: Registrar parámetros de cultivo
      const params: CultivationParametersModel = {
        id: 0,
        humidity_min: this.formLost.value.minHumidity,
        humidity_max: this.formLost.value.maxHumidity,
        temp_min: this.formLost.value.minTemperature,
        temp_max: this.formLost.value.maxTemperature,
        max_air_con: this.formLost.value.maxAirQuality,
        min_air_con: 0
      };

      const savedParams = await this.parameterService.registerParameters(params).toPromise();

      // Paso 2: Registrar cultivo
      const selectedCropType = this.cropTypes.find(
        type => type.crop_type_name === this.formLost.value.cropType
      );

      const crop: CropModel = {
        id: 0,
        crop_name: this.formLost.value.cropName,
        id_cultivation_parameter: savedParams?.id ?? 0,
        id_crop_type: selectedCropType?.id ?? 0
      };

      const savedCrop = await this.cropService.registerCrop(crop).toPromise();

      // Paso 3: Registrar parcela
      const parcel: ParcelModel = {
        Id: 0,
        Id_user: 1, // Reemplazar con ID de usuario real
        Id_crop: savedCrop?.id ?? 0,
        Id_device: 'device-id' // Reemplazar con ID de dispositivo real
      };

      await this.parcelService.registerParcel(parcel).toPromise();

      alert('Parcela registrada con éxito!');
      this.onReset();
    } catch (error) {
      console.error('Error al registrar parcela:', error);
      alert('Ocurrió un error al registrar la parcela');
    } finally {
      this.loading = false;
    }
  }
}