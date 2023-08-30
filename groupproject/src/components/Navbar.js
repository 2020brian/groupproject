
import { NavLink } from "react-router-dom"; 
import { BsFillHouseHeartFill } from 'react-icons/bs'
import { FaTruckMoving } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa'
import { LuLogIn } from 'react-icons/lu'
import { LuLogOut } from 'react-icons/lu'

import { FaUser } from 'react-icons/fa'
import './Navbar.css'



function Navbar() {
  return (
    <>
    <div className="free">
     
        <div className='icons'>
        <FaTruckMoving /> 
        </div>
        <p>Free shipping upto Kshs 1000!!!  </p>
      </div>
      <div className='topheader'>
        <div className='container'>
          <div className='logo'>
            <strong>SHOPify</strong>
          </div>
          <div className='search'>
            <input type='text' value='' placeholder='search product'></input>
            <button>Search</button>
          </div>
          <div className='icon'>
              <div className='account'>
                <div className='iconuser'>
                <FaUser />
                </div>
                <p>Hello, user</p>
                <div className='icon2'>
                  <NavLink to="/" className='routelink'>Home<BsFillHouseHeartFill /></NavLink>
                  <NavLink to="/cart" className='routelink'>Cart<FaShoppingBag /></NavLink>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='header-container'>
          
          <div className='container'>
            <div className='menu'>
              <ul>
              <li>
                <NavLink to='/'>Home</NavLink>

              </li>
              <li>
                <NavLink to='/product'>Product</NavLink>

              </li>
              <li>
                <NavLink to='/about'>About Us</NavLink>

              </li>
              <li>
                <NavLink to='/contacts'>Contacts</NavLink>

              </li>
              </ul>

            
          </div>
          <div className='authentication-container'>
            <LuLogIn />
            <LuLogOut />
          </div>
            
          </div>
         

        </div>
        
    </>
  );
}

export default Navbar;