import React from 'react'
import sign_in from '../images/log_in.png'
export default function Nav(){
    return (
        <nav>
           <h1 className='rest_tag'>Jay's Cabin</h1> 
           <a href = 'www.google.com' id ='sign_in'>Sign in</a>
           <img src ={sign_in} alt='' className='sign_in_image'/>
        </nav>
    )
}