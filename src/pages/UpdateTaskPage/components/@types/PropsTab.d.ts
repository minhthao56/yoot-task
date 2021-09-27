interface IPropsTab{
    tab?:boolean | string;
}
interface IPropDataDetailTask{
    dataDetailTask:any;

}
interface IPropDataDetailTaskComments{
    dataComment:Array;

}
interface IPropDataDetailTaskImg{
    dataImage:Array;

}
interface data{
    Code:string;
    Title:string;
}
interface IPropsOptions{
	listStatusTask:Array<number | string>,
	listVersion:Array<number | string>,
	ListPriority:Array<number | string>,
	listTypeDevices:Array<number | string>,
	listEnv:Array<number | string>,
	listProject:Array<number | string>,
}
interface IPropUserTask{
    listAccounts:any,
}