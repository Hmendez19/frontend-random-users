import  React, { Suspense } from 'react';
const UserBlock = React.lazy(()=>import('../../Modules/Users/Infrastructure/Views/UserBlock'))
const UserList = React.lazy(()=>import('../../Modules/Users/Infrastructure/Views/UserList')) 
const UserSection:React.FC = () => {
    return (
        <Suspense fallback={<div className="display-center">Cargando componentes...</div>}>
            <UserBlock render={(users)=> <UserList data={users}/>} />
        </Suspense> 
    )
}


export default UserSection;