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
            title: "Confirmación",
            text: `¿Está seguro de eliminar a ${user.firstName} ${user.lastName}?`,
            icon: "warning",
            buttons: ["Cancelar", "Aceptar"],
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              try{
                updateGlobalState({
                  users: userService.DeleteUser(user.id)
                })
                swal("¡El usuario fue eliminado exitosamente!", {
                  icon: "success"
                });
              }catch(errorEx){
                throw new Error(errorEx?.message||'Ocurrió un error al eliminar el usuario');
              }
            } 
        }).catch((ex)=>{
          swal(ex.message, {
            icon: "error",
            timer:1800,
            buttons: false
          });
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