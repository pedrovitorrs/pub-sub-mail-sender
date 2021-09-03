export interface UseCase<T = any | any[], R = any > {
    execute: (args: T) => Promise<R>
  }
  
  export default UseCase