import React from 'react'
import menuData from '../data/menu_types'
import Menu from './main_contents/Menu'
import SCart from './main_contents/SCart'

export default function Main(){   
    const [dishesArray,setDishesArray] = React.useState(menuData.data.Appetizer)
    const [selectedItem, setSelectedItem] = React.useState([])
    const [subTotal,setSubTotal] = React.useState(0)
    const [tax,setTax] = React.useState(0)
    const [total,setTotal] = React.useState(0)

    let dishes = dishesArray && dishesArray.map(item => {
        return (
            <Menu 
                key={item.id}
                subTotal={subTotal}
                addDishToCart={addDishToCart}
                {...item}
            />
        )
    })

    function addDishToCart(item){
        setSelectedItem(prevItem=>([
            ...prevItem,
            {key:item.id,
            name:item.name,
            price:item.price}
        ]))
        setSubTotal(prevItem=>prevItem+item.price)    
    }

    React.useEffect(()=>{
        setTax(subTotal*0.15)
        setTotal(subTotal+tax)
    },[subTotal,tax])
   
    // console.log(subTotal)
    function addCartItem(item){
        setSubTotal(prevItem=>prevItem+item.price)
    }
    function subCartItem(item){
        setSubTotal(prevItem=>prevItem-item.price)
    }
    //event handler
    function changeContent(event){
        const name = event.target.name
        if(name==='Main')setDishesArray(menuData.data.Main)
        else if(name==='Appetizer')setDishesArray(menuData.data.Appetizer)
        else setDishesArray(menuData.data.Dessert)
    }

    return (
        <main>
            <div className='menu_address'>
                <p>210 Wentworth Dr, Halifax, Nova Scotia</p>
                <p>(902)880-5112</p>
            </div>
            <SCart 
                addCartItem={addCartItem}
                subCartItem={subCartItem}
                subTotal = {subTotal}
                tax={tax}
                total={total}
                selectArray={selectedItem}
            />
            <section className='menu_nav'>         
                <div className='menu_nav_buttons'>
                    <button 
                        className='nav_button'
                        onClick={changeContent}
                        name="Appetizer"
                    >
                        Appetizer
                    </button>
                    <button 
                        className='nav_button'
                        onClick={changeContent}
                        name="Main"
                    >
                        Main
                    </button>
                    <button 
                        className='nav_button'
                        onClick={changeContent}
                        name="Dessert"
                    >
                        Dessert
                    </button>
                </div>
                <section className='menu_content'>
                    {dishes}
                </section>
               
            </section>
            
        </main>
    )
}