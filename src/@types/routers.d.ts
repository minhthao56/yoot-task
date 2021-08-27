interface IPrivateRouter {
  component: any;
  layout: any;
  exact?: boolean;
  path?: string;
  header?: any;
  footer?: any;
}

interface IPublicRouter {
  component: any;
  layout: any;
  exact?: boolean;
  path?: string;
  header?: any;
}
