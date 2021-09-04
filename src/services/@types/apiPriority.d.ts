interface IParamsGetListPriorities {
  Title: string;
  Status: number;
  Page: number;
}
interface IParamsCreatePriority {
  Title: string;
  Status: number;
  Orderview: number;
}
interface IParamsUpdataPriority extends IParamsCreatePriority {
    Id: number | string;
}
interface IParamsPriorityId {
  Id: number | string;
}
