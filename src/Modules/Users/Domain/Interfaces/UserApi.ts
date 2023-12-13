import { Name } from "./Name"
import {Location} from './Location'
import { Login } from "./Login"
import { Dob } from "./Dob"
import { Registered } from "./Registered"
import { Id } from "./Id"
import { Picture } from "./Picture"

export interface UserApi {
    gender: string
    name: Name
    location: Location
    email: string
    login: Login
    dob: Dob
    registered: Registered
    phone: string
    cell: string
    id: Id
    picture: Picture
    nat: string
}