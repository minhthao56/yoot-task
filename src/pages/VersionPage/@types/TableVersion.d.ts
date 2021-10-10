interface ITableVersion {
    dataVersions: Array<IResVersion>;
    handleDelete: (id: number)=> void;
}