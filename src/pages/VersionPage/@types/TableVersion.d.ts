interface ITableVersion {
    dataVersions: Array<IResVersion>;
    handleUpdate: ()=>void;
    handleDelete: (id: number)=> void;
}