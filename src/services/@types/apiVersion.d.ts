interface IParamsGetListVersions {
    Title?: string;
    Status?: number;
    Page?: number;
  }
  interface IParamsCreateVersion {
    Title: string;
    Status: number;
  }
  interface IParamsUpdataVersion extends IParamsCreateVersion {
      Id: number | string;
  }
  interface IParamsVersionId {
    Id: number | string;
  }