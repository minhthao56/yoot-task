interface IResGetListProjects
  extends IResponseResultApi<IResConntentProjects> {}

interface IResProject {
  CreateDate: string;
  CreateUserName: string;
  Name: string;
  TypeDeviceText:string;
  StatusText: string;
  UpdateDate: string;
  UpdateUserName: string;
}

interface IResConntentProjects {
  Projects: Array<IResProject>;
}
