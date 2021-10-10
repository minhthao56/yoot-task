interface IStatusTask {
    Title?: string;
    Status?: number;
}
interface IParamsGetListStatusTask extends IStatusTask {
    Page?: number | string;

}
interface IParamsCreateStatusTask extends IStatusTask {
    Orderview?: number | string;

}
interface IParamsUpdateStatusTask extends IParamsCreateStatusTask {
    Id?: number | string;

}
interface IParamsStatusTaskId{
    Id?: number | string;
}