import React from 'react'
import {Link} from "react-router-dom"
import {FaSearch} from 'react-icons/fa'
import {BsCart4} from 'react-icons/bs'
import './header.css'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
function Header() {

  const [{cart,user}] = useStateValue()
  console.log(user);
  const logout = () => {
    auth.signOut();
  }
  return (
    <div className='header'>
      <div className='header__logo'>
        <Link className='link' to='/'><h2 className='header__logo'>Shop-In</h2></Link>
      </div>

      <div className='header__search'>
            <input className='header__input'  />
            <div className='header__searchIcon'>
            <FaSearch />
            </div>
      </div>



      <div className='header__info'>
        <p className='header__user'>{user ? "Welcome!" : "Hello!"}</p>
        {/* {
          user != null ? (
            <Link to='/login'>
            <p className='header__login'>Sign-In</p>
            </Link>
          ):(
           
            <p onClick={logout} className='header__login'>Logout</p>
    
          )
        } */}

        { 
        <Link className='header__login' to={user ? "/" : "/login"}>
          <p onClick={logout}>{user ? "logout" : "SignIn"}</p>
        </Link>
        }
       
        <Link className='header__cart' to={user ? "/cart" : "/login"}>
          
          <BsCart4 title='Cart'/>
          {
            cart.length > 0 && 
            <p>{cart?.length}</p>
          }
        </Link>
      </div>
    </div>
  )
}

export default Header
