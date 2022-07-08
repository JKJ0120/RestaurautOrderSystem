import React from 'react'
import menuData from '../data/menu_types.js'
import Menu from './main_contents/Menu.js'

export default function Main(){   
    const [dishesArray,setDishesArray] = React.useState(menuData.data.Appetizer)
    let dishes = dishesArray && dishesArray.map(item => {
        return (
            <Menu 
                key={item.id}
                {...item}   
            />
        )
    })
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
                <p>(902)443-6112</p>
            </div>
            <section className='menu_shopping_car'>
                <h1>Shopping car</h1>
            </section>
            
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