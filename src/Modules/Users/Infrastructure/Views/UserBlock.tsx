import { useEffect, useState } from "react";
import { User } from "../../Domain/Entities/UserEntity";
import { UserService } from "../Services/UserService";
import Spinner from "../../../../Shared/Views/Components/Spinner/Spinner";
import { UseGlobalState } from "../../../../Shared/Hooks/UseGlobalState";
const userService = new UserService();

const UserBlock:React.FC<{render:(data:User[])=>JSX.Element}> = ({render}) => {
    const { globalState, updateGlobalState } = UseGlobalState();
    const [isLoading,setIsLoading] = useState<boolean>(false);
    useEffect(() => {
        const fetchData = async () => {
            try{
                setIsLoading(true);
                const data = await userService.GetAll();
                updateGlobalState({
                    users: data
                })
            }catch(err){
                console.error(err);
            }
            finally{
                setIsLoading(false);
            }
        }
        fetchData();
    }, [])

    if(isLoading){
        return <Spinner />
    }

    return render(globalState.users);
}


export default UserBlock;