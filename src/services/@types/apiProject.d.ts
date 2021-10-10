interface IProject{
    Name?: string;
    Status?: number;
}
interface IProjectUser {
  Id?: number | string;
  UserId?: number | string;
}

interface IParamsGetListProjects extends IProject {
  Page?: number;
  TypeDevice?: number;
}
interface IParamsCreateProject extends IProject {
  ProjectUsers?: IProjectUser;
  Typedeviceid?:number|string;
}
interface IParamsUpdataProject extends IParamsCreateProject{
    Id?: number | string;
}
interface IParamsProjectId {
  Id?: number | string;
TypeDevice?: number,
Page?: number;

}
interface IParamsCreateProject extends IProject {
ProjectUsers?: IProjectUser;
Typedeviceid?: number|string;
}
interface IParamsUpdataProject extends IParamsCreateProject{
  Id: number | string;
}
interface IParamsProjectId {
Id: number | string;
}
