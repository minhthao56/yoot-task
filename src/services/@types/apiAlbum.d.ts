interface IAlbum {
    Title: string;
    Status: number|string;
}
interface IParamsGetListAlbum extends IAlbum{
    Page:number|string;
}
interface IParamsGetDetailAlbum{
    Id:number|string;
}
interface IParamsCreateAlbum extends IAlbum{

}
interface IParamsUpdateAlbum extends IAlbum{
    Id:number|string;
}
interface IParamsAlbumId {
    Id:number|string;
}