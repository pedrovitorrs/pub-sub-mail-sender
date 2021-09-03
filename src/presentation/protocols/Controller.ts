export interface HttpRequest {
    headers?: any
    params?: any
    query?: any
    body?: any
  }
  
  export interface AuthHttpRequest<T = any> extends HttpRequest {
    auth: {
      token: string
      tokenPayload: T
    }
  }
  
  export interface HttpResponse {
    body: any
    status: number
  }
  
  export interface Controller<T = HttpRequest, R = HttpResponse> {
    handle: (httpRequest: T) => Promise<R>
  }