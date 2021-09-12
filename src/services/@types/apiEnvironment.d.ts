interface IEnvironment {
    Title?: string;
    Status?: number|string;
}
interface IParamsGetListEnvironment extends IEnvironment{
    Page?:number|string;
}
interface IParamsGetDetailEnvironment {
    Id:number | string;
}
interface IParamsCreateEnvironment extends IEnvironment{

}
interface IParamsUpdateEnvironment extends IEnvironment{
    Id:number | string
}
interface IParamsEnvironmentId{
    Id:number | string
}