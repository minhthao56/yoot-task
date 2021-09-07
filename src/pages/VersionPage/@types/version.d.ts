interface IResGetListVersions
  extends IResponseResultApi<ResContentListVersions> {}

interface IResVersion {
  CreateDate: string;
  CreateUserName: string;
  Id: number;
  StatusText: string;
  Title: string;
  UpdateDate: string;
  UpdateUserName: string;
}

interface ResContentListVersions {
  Versions: Array<IResVersion>;
}
