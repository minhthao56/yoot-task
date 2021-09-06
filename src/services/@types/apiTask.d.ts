interface ITask{
    Code:string;
    Title:string;
    Deadline:Date;
    Environment:number;
    TypeDevice:number;
    FixedVersion:number;
    OpenedVersion:number;
    Status: number;
}
interface ILoginSuccess{
    Id:number | string;
    Name:string;
    Email:string;
    Password:string;
    RoleId: number | string;
}

interface ITaskUser{
    Id: number | string;
    UserId:number | string;
    TypeTaskUserId:number | string;
}
interface ILogTaskChangeStatus{
    Id:number | string;
    StatusOldText:string;
    StatusNewText:string;
    CreateUserName:string;
    CreateDate:Date;
}
interface ITaskComment{
    Id:number | string;
    CreateUserName:string;
    CreateDate:Date;
    Message:string;
}
interface IParamsGetListTask extends ITask{
    Project:number;
    Priority:number;
    StatusTask:number;
    Page:number;
    LoginSuccess:ILoginSuccess;
    User:number;
}
interface IParamsTaskId{
    Id:number | string;
}
interface IParamsCreateTask extends ITask{
    ProjectId:number | string;
    PriorityId:number;
    StatusTaskId:number | string;
    TaskUsers:ITaskUser;
    LogTaskChangeStatuses:ILogTaskChangeStatus;
    TaskComments:ITaskComment;
}
interface IParamsUpdateTask extends IParamsCreateTask {
    Id : number | string;
}
interface IParamsMessageTask{
    TaskId:number | string;
    Message:string;
}