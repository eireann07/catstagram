import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <>
        <nav>
            
            <ul className='navbar'>
                <li><img src="./Images/Logo.png" alt="logo" height={50}/></li>
                <li className= 'heading'>Catstagram</li>
                <Link to='/home'> 
                    <li className='navitem'> Home</li>
                </Link>
                <Link to='/profile'>
                    <li className='navitem'>About the Developer</li>    
                </Link>
                
            </ul>
        </nav>
        </>
    )
}

export default Navbar;