
import { User } from "../Entities/UserEntity";

export interface UserRepository{
    GetAll():Promise<User[] | null>;
    DeleteUser(userId:string):User[] |[]
    LoadData(users:User[]):void;
}