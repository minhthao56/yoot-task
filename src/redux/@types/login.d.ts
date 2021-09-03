interface IResUserInfo {
  Email: string;
  Id: number;
  Name: string;
  Password: string;
  RoleId: number;
}

interface ResContentLogin {
  Token: string;
  UserInfo: IResUserInfo;
}

interface IResLogin extends IResponseResultApi<ResContentLogin> {}
