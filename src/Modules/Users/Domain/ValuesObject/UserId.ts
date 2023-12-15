import { UserNotValidException } from "../Exceptions/UserNotValidException";

export class UserId{
    private  value:string;
    constructor(readonly id:string){
      this.value = id;
      this.userIdNotValid();
    }

    getValue():string{
        return this.value
    }

    private userIdNotValid(){
       this.ensureIsNotEmpty();
    }

    private ensureIsNotEmpty(){
        if(String(this.value).trim().length===0){
            throw new UserNotValidException("El identificador del usuario no puede ser vacío")
           }
    }
}