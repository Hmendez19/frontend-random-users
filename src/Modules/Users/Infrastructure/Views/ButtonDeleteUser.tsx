import React ,{useEffect}from 'react';
import { User as UserEntity } from '../../Domain/Entities/UserEntity';
import TrashIcon from '../../../../Shared/Views/Components/Icons/TrashIcon';
import swal from 'sweetalert';
import { UseGlobalState } from '../../../../Shared/Hooks/UseGlobalState';
import { UserService } from '../Services/UserService';
const userService = new UserService();

const ButtonDeleteUser:React.FC<{user:UserEntity}>=({user})=>{
    const { globalState, updateGlobalState } = UseGlobalState();

    useEffect(() => {
      userService.LoadData(globalState.users);
    }, [globalState.users])
    
    const OnDeleteUser = (e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        swal({
            title: "Confirmacion",
            text: `¿Está seguro de eliminar a ${user.firstName} ${user.lastName}?`,
            icon: "warning",
            buttons: ["Cancelar", "Aceptar"],
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              updateGlobalState({
                users: userService.DeleteUser(user.id)
              })
              swal("¡El usuario fue eliminado exitosamente!", {
                icon: "success"
              });
            } 
        });
    }
   return (
    <button className="btn-trash" onClick={(e)=>OnDeleteUser(e)}>
        <TrashIcon width={18} height={24}/>
        Eliminar
    </button>
   )
}

export default ButtonDeleteUser