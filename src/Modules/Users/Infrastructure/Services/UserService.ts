import { UserRepository as  IUserRepository} from '../../Domain/Repositories/UserRepository';
import { User } from '../../Domain/Entities/UserEntity';
import { GetAllUsers } from '../../Application/UseCase/GetAll/GetAllUsers';
import { DeleteUser } from '../../Application/UseCase/Delete/DeleteUser';
import { UserRepository } from '../Repositories/UserRepository';

export class UserService{
    private readonly userRepository:IUserRepository;
    constructor(){
        this.userRepository = new UserRepository();
    }
    GetAll():Promise<User[] | null>{
        return GetAllUsers(this.userRepository);
    }

    DeleteUser(userId:string):boolean|null{
        return DeleteUser(this.userRepository,userId);
    }

    LoadData(users:User[]){
        this.userRepository.LoadData(users);
    }
}