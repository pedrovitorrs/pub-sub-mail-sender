export interface LoggerMessage {
    level: string
    message: any
  }
  
  export interface LoggerHelper {
    log: (message: LoggerMessage) => void
  }
  