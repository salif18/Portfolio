import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
      <>
      <div className='header'></div>
        <nav className='nav-bar'>

         {/*zone titre et logo a gauche*/}
            <div className='nav-logo'>
              <h1>PORTFOLIO <span>Smeck-DEV</span></h1>
            </div>

            {/*Zone liens a droite*/}
            <div className='nav-links'>
              <NavLink to='/' className={({isActive})=>(isActive ? 'active':'links')} >HOME</NavLink>
              <NavLink to='/biographie' className={({isActive})=>(isActive ? 'active':'links')}>A PROPOS</NavLink>
            </div>

        </nav>
      </>  
    );
}

export default Navbar;
