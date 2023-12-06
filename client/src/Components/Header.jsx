import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import LOGO from '../public/assets/logo.png'
import WHISHLIST from '../public/assets/wishlist.png'
import { useDispatch } from 'react-redux';
import { logout } from "../slices/authSlice";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.userName);
  const dispatch = useDispatch();

  console.log('dwadwad')
  const handleLogout = () =>{
    dispatch(logout())
  }

  return (
    <div className='bg-cyan-200 h-24 text-black text-xl'>
      <div className='w-8/12 mx-auto flex'>
        <Link to='/'><img className='w-20 mt-2' src={LOGO} /></Link>
        {isLoggedIn && <div className='m-auto font-medium'>{user}</div>}
        <div className='mx-auto my-auto'>
          {
            isLoggedIn && 
            <Link to='wishlist'> <img className='w-12 hover:cursor-pointer 'src={WHISHLIST} /></Link>
          }
        </div>
          <div to='login' className='m-auto font-medium hover:cursor-pointer'>
            {isLoggedIn ? <span onClick={handleLogout}>Logout</span> : <Link to='login'>Login</Link>}
          </div>
      </div>
    </div>
  )
}

export default Header