interface IResGetListProjects
  extends IResponseResultApi<IResConntentProjects> {}

interface IResProject {
  CreateDate: string;
  CreateUserName: string;
  Name: string;
  TypeDevice:string;
  StatusText: string;
  UpdateDate: string;
  UpdateUserName: string;
}

interface IResConntentProjects {
  Projects: Array<IResProject>;
}
