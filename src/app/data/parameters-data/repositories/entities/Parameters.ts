
interface CultivationParametersAttributes {
    min_humedity: number;
    max_humedity: number;
    min_temp: number;
    max_temp: number;
    max_air_con: number;
    min_air_con: number;
}

interface CultivationParametersLinks {
    self: string;
}

interface CultivationParametersData {
    type: string;
    id: string;
    attributes: CultivationParametersAttributes;
    links: CultivationParametersLinks;
}

export interface ResponseCultivationParameter {
    data: CultivationParametersData;
    status: number;
}
