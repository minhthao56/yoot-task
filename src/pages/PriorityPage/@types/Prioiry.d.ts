interface IResGetListPriorities
  extends IResponseResultApi<IResConntentPriorities> {}

interface IResPriority {
  CreateDate: string;
  CreateUserName: string;
  Id: number;
  OrderView: number;
  StatusText: string;
  Title: string;
  UpdateDate: string;
  UpdateUserName: string;
}

interface IResConntentPriority {
    Priorities: Array<IResPriority>;
}