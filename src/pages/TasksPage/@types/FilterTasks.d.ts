interface IFilterTask {
    handleSubmit: (
        searchCode: string, 
        searchTitle: string,
        searchDeadline:string,
        searchStatus: number
        )=> void;
}