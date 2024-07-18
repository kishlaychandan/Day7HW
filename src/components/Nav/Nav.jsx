import './Nav.css';
import React from 'react';
function Nav(){
    return(
        <div className='nav'>
            <div className='logo'><img src="https://flowbite.com/docs/images/logo.svg" alt="" />GeekFoods</div>
            <ul>
                <li>Home</li>
                <li>Qutoe</li>
                <li>Restaurent</li>
                <li>Foods</li>
                <li>Contact</li>
            </ul>
            <button className='btn getStarted'>Get Started</button>
        </div>
    );
}

export default Nav;