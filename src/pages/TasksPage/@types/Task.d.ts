interface IResGetListTasks 
    extends IResponseResultApi<ResContentListTasks> {}

interface ResTask {
    Code: string;
    CreateDate: string;
    CreateUserName: string;
    Deadline: string;
    Description: string;
    EnvironmentText: string;
    FixedVersionText: string;
    Id: number;
    JoinUserNames: string;
    OpenedVersionText:string;
    PriorityText: string;
    ProjectText: string;
    StatusTaskText: string;
    StatusText: string;
    Title: string;
    TypeDeviceText: string;
    UpdateDate: string;
    UpdateUserName: string;
    YourTaskId: number;
}
  
interface ResContentListTasks {
    Tasks: Array<ResTask>;
}
  