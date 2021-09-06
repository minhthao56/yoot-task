interface ITeam{
    Name: string;
    Status:number;
}
interface IParamsGetListTeam extends ITeam{
    Page:number | string;
}
interface IParamsTeamId {
    Id:number | string;
}
interface ITeamUser {
    Id:number | string;
    UserId:number | string;
    RoleTeamUserId:number | string;
}
interface IParamsCreateTeam extends ITeam{
    Description:string;
    TeamUsers:ITeamUser;
}
interface IParamsUpdateTeam extends IParamsCreateTeam{
    Id : number | string;
}