export interface CropTypeAttributes {
    crop_type_name: string;
    description: string;
  }
  
  export interface CropTypeLinks {
    self: string;
  }
  
  export interface ResponseCropType {
    data: {
      type: string;
      id: string;
      attributes: CropTypeAttributes;
      links: CropTypeLinks;
    };
    status: number;
  }
  