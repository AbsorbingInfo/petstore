import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import LOGO from '../assets/logo.png'
import WHISHLIST from '../assets/wishlist.png'
import { useDispatch } from 'react-redux';
import { setSetAuthStatus } from "../slices/authSlice";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const hanldeLogOut = () =>{
    dispatch(setSetAuthStatus(false))
  }
  
  return (
    <div className='bg-cyan-200 h-24 text-black text-xl'>
      <div className='w-8/12 mx-auto flex'>
        <img className='w-20 mt-2' src={LOGO} />
        <div className='my-auto italic ml-3 font-medium text-cyan-700'>Buying commodities is one thing,<br/> buying real life cuties is another.</div>
        <div className='mx-auto my-auto'>
          {
            isLoggedIn && 
            <Link to='wishlist'> <img className='w-12 hover:cursor-pointer 'src={WHISHLIST} /></Link>
          }
        </div>
          <div to='login' className='m-auto font-medium hover:cursor-pointer'>
            {isLoggedIn ? <span onClick={hanldeLogOut}>Logout</span> : <Link to='login'>Login</Link>}
          </div>
      </div>
    </div>
  )
}

export default Header