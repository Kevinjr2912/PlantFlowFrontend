interface CropAttributes {
    crop_name: string;
    id_cultivation_parameter: number;
    id_crop_type: number;
}

interface CropLinks {
    self: string;
}

interface CropData {
    type: string;
    id: string;
    attributes: CropAttributes;
    links: CropLinks;
}

export interface ResponseCrop {
    data: CropData;
    status: number;
}
