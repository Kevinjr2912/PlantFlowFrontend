export interface DeviceAttributes {
    id_model: number;
    id_status: number;
    manufacturing_date: string | null;
    installation_date: string | null;
    maintenance_date: string | null;
    withdrawal_date: string | null;
  }
  
  export interface DeviceLinks {
    self: string;
  }
  
  export interface Device {
    type: string;
    id: string;
    attributes: DeviceAttributes;
    links: DeviceLinks;
  }
  
  export interface ResponseDevice {
    data: Device;
    status: number;
  }
  