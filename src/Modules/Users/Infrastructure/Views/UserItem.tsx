import React,{memo} from 'react';
import { User as UserEntity } from '../../Domain/Entities/UserEntity';
import Avatar from '../../../../Shared/Views/Components/Avatar/Avatar';
import ButtonDeleteUser from './ButtonDeleteUser';
import { Dimension } from '../../../../Shared/Constants/Dimensions';

const UserItem:React.FC<{currentUser:UserEntity}> = memo(({currentUser})=>{
    return (
        <tr key={currentUser.id}>
            <td><Avatar src={currentUser.picture} alt={currentUser.picture} size={Dimension.Tiny}/></td>
            <td>{currentUser.firstName} {currentUser.lastName}</td>
            <td>{currentUser.email}</td>
            <td>{currentUser.country}</td>
            <td><ButtonDeleteUser user={currentUser}/> </td>
        </tr>
    )
})

export default UserItem;