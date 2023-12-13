import { UserRepository as IUserRepository } from "../../Domain/Repositories/UserRepository";
import { User } from "../../Domain/Entities/UserEntity";
import { GetApiUrl } from "../../../../Shared/Constants/Api";
import { TotalResult } from "../../../../Shared/Constants/Mixed";
import { UserResponse } from "../../Domain/Interfaces/UserResponse";
import { UserApi } from "../../Domain/Interfaces/UserApi";
export class UserRepository implements IUserRepository {
  private users: User[] = [];

  async GetAll(): Promise<User[] | null> {
    try {
      const response = await fetch(GetApiUrl(TotalResult));
      const isOk = response.ok;
      if (isOk) {
        const data: UserResponse = await response.json();
        this.users = data?.results?.map((user: UserApi) => {
          return {
            id: user.login.uuid,
            firstName: user.name.first,
            lastName: user.name.last,
            email: user.email,
            country: user.location.country,
            picture: user.picture.medium,
          };
        });
      }

      return this.users;
    } catch (error) {
      return null;
    }
  }

  DeleteUser(userId: string = ""): User[] | [] {
    return this.users.filter((userItem:User)=>userItem.id!==userId)
  }

  LoadData(users:User[]){
    this.users=users;
  }
}
