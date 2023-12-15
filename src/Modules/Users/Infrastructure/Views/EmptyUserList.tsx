import React from 'react'
import SadMoodIcon from '../../../../Shared/Views/Components/Icons/SadMoodIcon';

const EmptyUserList:React.FC<{length:number}>=({length})=>{
    return (
        <tr>
            <td colSpan={length}>
                <p className="text-center flex-row"> <SadMoodIcon width={40} height={40}/>No hay usuarios</p>
            </td>
        </tr>
    );
}

export default EmptyUserList