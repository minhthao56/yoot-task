interface IResGetListTasks 
    extends IResponseResultApi<ResContentListTasks> {}

interface ResTask {
    Code: string;
    CreateDate: string;
    CreateUserName: string;
    Email: string;
    Id: number;
    Title: string;
    Phone: string;
    RoleTitle: string;
    StatusText: string;
    TypeUserText: string;
    UpdateDate: string;
    UpdateUserName: string;
}
  
interface ResContentListTasks {
    Tasks: Array<ResTask>;
}
  