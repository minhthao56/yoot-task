interface IResGetListTasks 
    extends IResponseResultApi<ResContentListTasks> {}
interface IResGetDetailTask 
    extends IResponseResultApi<ResContentDetailTask> {}

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
interface ResContentDetailTask {
    Task: Array<IResDetailTask>;
}
  
interface IResDetailTask{
    Id?:number;
    Code?:string;
    Title?:string;
    Description?:string;
    Projectid?:number;
    Deadline?:string;
    Environment?:number;
    Typedevice?:number;
    Priorityid?:number;
    Openedversion?:number;
    Fixedversion?:number;
    Status?:number;
    LogTaskChangeStatuses?:Array<string|number>;
    TaskCriterias?:string;
    Message?:string;
    Statustaskid?: number;
    TaskComments?: Array;
    TaskCriterias?: Array<string|number>;
    TaskMedias?: Array<string|number>;
    TaskUsers?: Array<string|number>;
    IsView?: number;

}