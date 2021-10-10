interface IParamsGetListAccount {
  Name?: string;
  Email?: string;
  Phone?: string;
  RoleId?: number;
  Status?: number;
  TypeUser?: number;
  Page?: number;
  IngoreUserId?: number;
}

interface IParamsGetDetailAccount {
  Id: number | string;
}

interface AccountTeams {
  Id: number | string;
  TeamId: number | string;
  RoleTeamUserId: number | string;
}
interface AccountSchedules {
  WeekDayId: number | string;
  WeekDayTitle: string;
  SessionId: number | string;
}
interface IParamsCreateAccount {
  Name: string;
  Email: string;
  Phone: string;
  Password: string;
  RePassword: string;
  RoleId: number | string;
  Status: number | string;
  TypeUserId: number | string;
  AccountTeams: IAccountTeams;
  AccountSchedules: IAccountSchedules;
}
interface IParamsUpdateAccount {
  Name: string;
  Email: string;
  Phone: string;
  Password: string;
  RePassword: string;
  RoleId: number | string;
  Status: number | string;
  TypeUserId: number | string;
  AccountTeams: IAccountTeams;
  AccountSchedules: IAccountSchedules;
}
interface IParamsAccountId {
  Id: number | string;
}
