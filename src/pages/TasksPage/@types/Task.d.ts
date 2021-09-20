interface IResGetListProjects
  extends IResponseResultApi<IResConntentProjects> {}

interface IResTask {
    Id: number;
    Code: string;
    Title: string;
    PersonJoin: string;
    StatusWork: string;
    Info: string;
    Status: string;
    InfoCreated: string;
    InfoUpdate: string;
}

interface IResConntentProjects {
  Tasks: Array<IResTask>;
}
