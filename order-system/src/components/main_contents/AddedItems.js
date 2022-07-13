import React from 'react'

export default function AddedItems(props){

    const [count,setCount] = React.useState(1)
    const [price,setPrice] = React.useState(props.price)

    function itemAdd(){
        setCount(item=>item+1)
        setPrice(prevItem=>prevItem+=props.price)
        props.addCartItem(props)
    }
    
    function itemSub(){
        count && setCount(item=>item-1)
        count && setPrice(prevItem=>prevItem-props.price)
        count && props.subCartItem(props)
    }
    return(
        <div className='added_items'>
            <button 
                className='shopping_cart_subs'
                onClick ={itemSub}
            >
                -
            </button>
            <p>{count}</p>
            <button 
                className='shopping_cart_add'
                onClick={itemAdd}
            >
                +
            </button>
            <h4 className='shopping_cart_addedItems_name'>{props.name}</h4>
            <h4>${parseFloat(price).toFixed(2)}</h4>
        </div>
    )
}