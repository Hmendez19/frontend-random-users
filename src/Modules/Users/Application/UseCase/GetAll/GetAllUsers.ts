import { User } from "../../../Domain/Entities/UserEntity";
import { UserRepository } from "../../../Domain/Repositories/UserRepository";


export function GetAllUsers(userRepository:UserRepository):Promise<User[] | null>{
    return userRepository.GetAll();
}