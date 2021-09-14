interface IParamsGetListDevices {
  Title?: string;
  Status?: number;
  Page?: number;
}
interface IParamsCreateDevice {
  Title: string;
  Status: number;
}
interface IParamsUpdataDevice extends IParamsCreateDevice {
    Id: number | string;
}
interface IParamsDeviceId {
  Id: number | string;
}