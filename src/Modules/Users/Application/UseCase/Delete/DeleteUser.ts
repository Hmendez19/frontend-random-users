import { User } from "../../../Domain/Entities/UserEntity";
import { UserRepository } from "../../../Domain/Repositories/UserRepository";


export function DeleteUser(userRepository:UserRepository,userId:string):User[]|[]{
    return userRepository.DeleteUser(userId);
}