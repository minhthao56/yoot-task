interface IResGetListDevices
  extends IResponseResultApi<IResConntentDevices> {}

interface IResDevice {
  CreateDate: string;
  CreateUserName: string;
  Id: number;
  OrderView: number;
  StatusText: string;
  Title: string;
  UpdateDate: string;
  UpdateUserName: string;
}

interface IResConntentDevice {
    Devices: Array<IResDevice>;
}
