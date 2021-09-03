export default class ExceptionHandler {
    static throwWhen (option: boolean, error: Error): void {
        if (option) throw error
    }
} 