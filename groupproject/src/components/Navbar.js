
import { NavLink } from "react-router-dom"; 
import { BsFillHouseHeartFill } from 'react-icons/bs'
import { FaTruckMoving } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa'
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
            <div className='icon'>
              <div className='account'>
                <div className='iconuser'>
                <FaUser />
                </div>
                <p>Hello, user</p>
              

              </div>
              <BsFillHouseHeartFill />
              <FaShoppingBag />

            </div>

          </div>
        </div>




        </div>
     
    
      
    
  
    </>
  );
}

export default Navbar;