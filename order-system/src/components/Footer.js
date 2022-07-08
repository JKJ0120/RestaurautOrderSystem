import React from 'react'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png' 
import instagram from '../images/instagram.png'
import youtube from '../images/youtube.png'

export default function Footer(){
    return (
        <div className='footer'>
            <div className='footer_top'>
                <div className='footer_infor'>
                    <h3>Jay's Cabin</h3>
                    <a href='./not_found.html'><p>About Us</p></a>
                    <a href='./not_found.html'><p>Our Customers</p></a>
                    <a href='./not_found.html'><p>Press Releases</p></a>
                    <a href='./not_found.html'><p>Careers</p></a>
                </div>
                <div className='footer_resources'>
                    <h3>Resources</h3>
                    <a href='./not_found.html'><p>Privacy Notice</p></a>
                    <a href='./not_found.html'><p>Terms of Service</p></a>
                    <a href='./not_found.html'><p>Responsible Disclosure</p></a>
                </div>
            </div>
            <div className='footer_bottom'>
                <h3>Jay's Cabin</h3>
                <img src={twitter} className='social_icons' alt=''></img>
                <img src={facebook} className='social_icons' alt=''></img>
                <img src={instagram} className='social_icons' alt=''></img>
                <img src={youtube} className='social_icons' alt=''></img>
            </div>
        </div>
    )
}