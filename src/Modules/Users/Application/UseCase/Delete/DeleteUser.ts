import { User } from "../../../Domain/Entities/UserEntity";
import { UserRepository } from "../../../Domain/Repositories/UserRepository";
import { UserId } from "../../../Domain/ValuesObject/UserId";


export function DeleteUser(userRepository:UserRepository,userId:string):User[]|[]{
    const userIdValueObject=new UserId(userId);
    return userRepository.DeleteUser(userIdValueObject.getValue());
}