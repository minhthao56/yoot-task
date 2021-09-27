interface IPlan {
  FromDate?: Date;
  ToDate?: Date;
  Title?: string;
  Status?: number;
}

interface IParamsGetListPlans extends IPlan {
  Page?: number;
}
interface IParamsCreatePlan extends IPlan {
  Description: string;
}
interface IParamsUpdatePlan extends IParamsCreatePlan {
  Id: number | string;
}

interface IParamsPlanId {
  Id: number | string;
}
