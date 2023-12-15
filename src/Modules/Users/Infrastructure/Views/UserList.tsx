import React from "react"
import Table from "../../../../Shared/Views/Components/Table/Table"
import { User as UserEntity} from "../../Domain/Entities/UserEntity"
import { ColumnNames } from "../../../../Shared/Constants/Mixed"
import UserItem from "./UserItem"
import EmptyUserList from "./EmptyUserList"

const UserList:React.FC<{data:UserEntity[]}>=({data})=> {
  return (
    <div className="scrolling-x">
        <Table columns={ColumnNames}>
            {data?.map((user:UserEntity) => (<UserItem key={user.id} currentUser={user} />))}
            {data.length===0 && <EmptyUserList length={ColumnNames.length}/>}
        </Table>
    </div>
)
}

export default UserList