import { Info } from "./Info";
import { UserApi } from "./UserApi";

export interface UserResponse{
    results:UserApi[],
    info:Info
}