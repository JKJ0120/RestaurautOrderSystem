import React from 'react'
import AddedItems from './AddedItems'

export default function SCart(props){
    
    const subTotal=parseFloat(props.subTotal).toFixed(2)
    const tax = parseFloat(props.tax).toFixed(2)
    const total =parseFloat(props.total).toFixed(2)
    

    let SelectedDishes =props.selectArray.map(item =>{
        return(
            <AddedItems 
                addCartItem={props.addCartItem}
                subCartItem={props.subCartItem}
                key = {item.id}
                name={item.name}
                price={item.price}
            />
        )
    })
    return(
        <div className='menu_shopping_cart'>
            <div className='menu_shopping_cart_top'>
                <h1>Your Cart</h1>
                <button className='clear'>Clear</button>
            </div>
            <div className='menu_shopping_cart_main'>
                {SelectedDishes.length===0 && <h4>Cart Empty</h4>}
                {SelectedDishes}
            </div>
            <div className='menu_shopping_cart_bottom'>
                <div className='menu_shopping_cart_bottom_sub'>
                    <p>Subtotal</p>
                    <p>${subTotal}</p>
                </div>
                <div className='menu_shopping_cart_bottom_tax'>
                    <p>Tax</p>
                    <p>${tax}</p>
                </div>
                <div className='menu_shopping_cart_bottom_total'>
                    <h3>Total</h3>
                    <h3>${total}</h3>
                </div>
            </div>
            <button className='menu_shopping_cart_bottom_button'>Checkout</button>
        </div>
    )
}