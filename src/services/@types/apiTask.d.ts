interface ITask{
    Code?:string;
    Title?:string;
    Deadline?:Date | string;
    Environment?:number;
    TypeDevice?:number;
    FixedVersion?:number;
    OpenedVersion?:number;
    Status?: number;
}


interface ILoginSuccess{
    Id?:number | string;
    Name?:string;
    Email?:string;
    Password?:string;
    RoleId?: number | string;
}

interface ITaskUser{
    Id?: number | string;
    UserId?:number | string;
    TypeTaskUserId?:number | string;
}
interface ILogTaskChangeStatus{
    Id?:number | string;
    StatusOldText?:string;
    StatusNewText?:string;
    CreateUserName?:string;
    CreateDate?:DateTime|string;
}
interface ITaskComment{
    Id?:number | string;
    CreateUserName?:string;
    CreateDate?:DateTime|string;
    Message?:string;
}
interface IParamsGetListTask extends ITask{
    Project?:number;
    Priority?:number;
    StatusTask?:number;
    Page?:number;
    LoginSuccess?:ILoginSuccess;
    User?:number;
}
// interface IParamsGetListTask {
//     Code?: string,
//     Title?: string,
//     Project?: number,
//     Deadline?:string,
//     Environment?: number,
//     TypeDevice?: number,
//     Priority?: number,
//     OpenedVersion?: number,
//     FixedVersion?: number,
//     StatusTask?: number,
//     Status?: number,
//     Page?: number,
//     LoginSuccess?: {
//       Id?: number,
//       Name?: string,
//       Email?: string,
//       Password?: string,
//       RoleId?: number
//     },
//     User?: number
// }
interface IParamsTaskId{
    Id?:number | string;
}
interface IParamsCreateTask{
    Code?: string,
    Title?: string,
    Deadline?:string,
    Environment?: number,
    Typedevice?: number,
    Openedversion?: number,
    Fixedversion?: number,
    Statustaskid?: number,
    Status?: number,
    Projectid?:number | string;
    Priorityid?:number;
    Description?:string;
    StatusTaskId?:number | string;
    TaskUsers?:Array<ITaskUser>;
    LogTaskChangeStatuses?:Array<ILogTaskChangeStatus>;
    TaskComments?:Array<ITaskComment>;
}
interface IParamsUpdateTask extends IParamsCreateTask {
    Id?: number | string;
}
interface IParamsMessageTask{
    TaskId?:number | string;
    Message?:string;
}