import React from "react"
import Table from "../../../../Shared/Views/Components/Table/Table"
import { User as UserEntity} from "../../Domain/Entities/UserEntity"
import { Dimension } from "../../../../Shared/Constants/Dimensions"
import Avatar from "../../../../Shared/Views/Components/Avatar/Avatar"
import { ColumnNames } from "../../../../Shared/Constants/Mixed"
import ButtonDeleteUser from "./ButtonDeleteUser"
import SadMoodIcon from "../../../../Shared/Views/Components/Icons/SadMoodIcon"

const UserList:React.FC<{data:UserEntity[]}>=({data})=> {
  return (
    <div className="scrolling-x">
        <Table columns={ColumnNames}>
            {data?.map((user:UserEntity,index:number) => (
                <tr key={user.email+'#'+index}>
                    <td><Avatar src={user.picture} alt={'Picture #'+index} size={Dimension.Tiny}/></td>
                    <td>{user.firstName} {user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.country}</td>
                    <td><ButtonDeleteUser user={user}/> </td>
                </tr>
            ))}
            {
                data.length===0 && <>
                    <tr>
                        <td colSpan={ColumnNames.length}>
                            <p className="text-center flex-row"> <SadMoodIcon width={40} height={40}/>No hay usuarios</p>
                        </td>
                    </tr>
                </>
            }
        </Table>
    </div>
)
}

export default UserList