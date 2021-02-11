import React from 'react'
import './ListItem.css'

const ListItem = ({listItems,deleteItem}) => {
    return (
        <div className ="list">
            <ul>
     {listItems.map((el,index)=>(<li >{el} <button className="butts" onClick={()=>deleteItem(index)}>delete</button></li>

        ))}
        </ul>
        </div>
    )
}

export default ListItem
