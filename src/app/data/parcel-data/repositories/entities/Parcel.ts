interface ParcelAttributes  {
    id_user  : number;
    id_crop  : number;
    id_device: string;
    name?: string; 
    type_crop?: string; 
    device_model?: string; 
    crop_name?: string;
}

interface ParcelLinks  {
    self : string;
}


interface Parcel {
    type: string;
    id: string;
    attributes: ParcelAttributes;
    links: ParcelLinks;
}

export interface ParcelMinInfo {
    name: string;
    typeCrop: string;
    deviceModel: string;
}

export interface ResponseParcels {
    data: Parcel[];
    status: number;
}


export interface ResponseOneParcel {
    data: {
      type: string;
      id: string;
      attributes: {
        id_user: number;
        id_crop: number;
        id_device: string;
      };
      links: {
        self: string;
      };
    };
    status: number;
  }