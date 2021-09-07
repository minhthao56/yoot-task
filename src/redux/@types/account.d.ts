interface IResGetListAccount
  extends IResponseResultApi<ResContentListAccounts> {}

interface ResAccount {
  CreateDate: string;
  CreateUserName: string;
  Email: string;
  Id: number;
  Name: string;
  Phone: string;
  RoleTitle: string;
  StatusText: string;
  TypeUserText: string;
  UpdateDate: string;
  UpdateUserName: string;
}

interface ResContentListAccounts {
  Accounts: Array<ResAccount>;
}
