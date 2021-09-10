interface IResGetListEnvironment
    extends IResponseResultApi<ResContentListEnvironments> { }

interface ResEnvironment {
    CreateDate: string;
    CreateUserName: string;
    Id: number;
    Title: string;
    StatusText: string;
    UpdateDate: string;
    UpdateUserName: string;
}

interface ResContentListEnvironments {
    Environments: Array<ResEnvironment>;
}
