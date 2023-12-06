import React, { useEffect } from "react";
import {
    createBrowserRouter,
    Outlet 
  } from "react-router-dom";
import Header from "./Components/Header"
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Details from "./Components/Details";
import ErrorLayout from "./Components/ErrorLayout";
import Wishlist from "./Components/Wishlist";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchPets } from './slices/petsSlice';
import { fetchWishlist } from './slices/wishlistSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPets());
    dispatch(fetchWishlist());
  }, [dispatch]);


  return (
    <>
      <Header />
      <div className="min-h-[78vh]">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

const CheckAuthDetails = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      {isLoggedIn ? <Details /> : <Login />}
    </>
  )
}

const CheckAuthWishlist = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      {/* {isLoggedIn ? <Wishlist /> : <Login />} */}
      {<Wishlist />}
    </>
  )
}

export const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement: <ErrorLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pet",
        element: <CheckAuthDetails />
      },
      {
        path:'login',
        element:<Login />
      },
      {
        path:'signup',
        element:<Signup />
      },
      {
        path:'wishlist',
        element:<CheckAuthWishlist />
      }
    ]
  }
])
