interface IParamsGetListAccount {
  Name: string;
  Email: string;
  Phone: string;
  RoleId: number;
  Status: number;
  TypeUser: number;
  Page: number;
  IngoreUserId: number;
}

interface IParamsGetDetailAccount {
  Id: number | string;
}
