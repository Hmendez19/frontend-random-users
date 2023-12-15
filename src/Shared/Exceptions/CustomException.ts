class CustomException {
    public message: string;
    public arg: Array<unknown>;
    public code: number;
  
    constructor(message: string = "", arg: Array<unknown> = [], code: number = 412) {
      this.message = message;
      this.arg = arg || [];
      this.code = code || 412;
    }
  }
  
export default function createCustomException(name: string) {
    return class extends CustomException {
            constructor(message: string = "", arg: Array<unknown> = [], code: number = 412) {
            super(message, arg, code);
        }
    };
}