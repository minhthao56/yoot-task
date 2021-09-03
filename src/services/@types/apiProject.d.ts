interface IProject{
    Name: string;
    TypeDevice: number;
    Status: number;
}
interface IProjectUser {
    Id: number | string;
    UserId: number | string;
  }

interface IParamsGetListProjects extends IProject {
  Page: number;
}
interface IParamsCreateProject extends IProject {
  ProjectUsers: IProjectUser;
}
interface IParamsUpdataProject extends IParamsCreateProject{
    Id: number | string;
}
interface IParamsProjectId {
  Id: number | string;
}
