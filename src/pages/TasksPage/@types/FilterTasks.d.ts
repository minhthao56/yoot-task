interface IFilterTask {
    handleSubmit: (
        searchCode: string, 
        searchTitle: string,
        searchDeadline:string,
        searchStatus: number,
        searchEnvironment: number,
        searchTypeDevice: number,
        searchFixedVersion: number,
        searchOpenedVersion: number,
        searchProject: number,
        searchPriority: number,
        searchStatusTask: number,
        searchUser: number,
        )=> void;
}