interface IResGetListStatusTasks
  extends IResponseResultApi<IResConntentStatusTask> {}
interface IResGetListUpdateStatusTasks
  extends IResponseResultApi<IPropDataStatus> {}

interface IReStatusTask {
  CreateDate: string;
  CreateUserName: string;
  Id: number;
  Orderview: number;
  StatusText: string;
  Title: string;
  UpdateDate: string;
  UpdateUserName: string;
}

interface IResConntentStatusTask {
  StatusTasks: Array<IReStatusTask>;
}
