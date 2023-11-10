import React from 'react'
import { useSelector } from 'react-redux'
import WishlistCard from './WishlistCard'

const Wishlist = () => {
  const pets = useSelector((state) => state.wishlist.wishlist);
  return (
    <div className='w-9/12 mx-auto font-semibold'>
      {pets.map(pet => <WishlistCard key={pet.id} card={pet}/>)}
    </div>
  )
}

export default Wishlist