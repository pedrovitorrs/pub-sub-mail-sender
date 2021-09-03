export default interface IRoutes<T= any> {
    route: (router: T) => T
  }