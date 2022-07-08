import React from 'react'

export default function Menu(props){
    return(
        <div className='menu_content_dishes'>
            <h1 className='dishes_name'>{props.name}</h1>
            <p className='dishes_description'>{props.description}</p>
            <p className='dishes_price'>{props.price}</p>
        </div>
    )
}