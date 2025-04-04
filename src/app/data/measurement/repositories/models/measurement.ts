export interface MeasurementAttributes {
    Id_device     :string
	Temp          :number
	Humedity      :number
	Air           :number
	Sun           :number
	Date_and_hour :string
}

export interface MeasurementLinks {
    Self :string
}

export interface ResponseMeasurement {
    Data: {
		Type       :string
		Id         :string
		Attributes :MeasurementAttributes
		Links      :MeasurementLinks
	} 
	Status :number
}

export interface ResponseMeasurements {
    Data: {
		Type       :string
		Id         :string
		Attributes :MeasurementAttributes
		Links      :MeasurementLinks
	} []
	Status :number
}