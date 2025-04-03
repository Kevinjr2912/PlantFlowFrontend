export interface DeviceModel {
	Id                 :string;
	Id_model           :number;
	Id_status          :number;
	Manufacturing_date: Date | null;
	Installation_date: Date | null;
	Maintenance_date: Date | null;
	Withdrawal_date: Date | null;
}