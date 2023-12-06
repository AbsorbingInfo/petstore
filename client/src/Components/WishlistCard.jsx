import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteWishlistItemAsync } from '../slices/wishlistSlice'

const WishlistCard = ({card}) => {
  const dispatch = useDispatch()
  const handleRemoveWishlist = () => {
    console.log("ran")
    dispatch(deleteWishlistItemAsync(card))
    alert("Pet removed from favourites!")
  }

  return (
    <div className="w-full xl:w-9/12 mx-auto">
      <div className="flex justify-center my-2 bg-slate-100 py-4 rounded-md">
        <div>
          <img src={card.img} className="w-[180px] h-[180px] object-cover" />
        </div>
        <div className="w-[380px]">
          <div className="text-center font-semibold text-xl my-5 mx-16">
            {card.name}
          </div>
          <div className="text-center text-[#3b8d39] font-semibold text-lg">
          ₹ {card.rate}
          </div>
          <div className="flex justify-center text-lg font-medium mt-8">
            <div onClick={handleRemoveWishlist} className="ml-3 bg-cyan-200 rounded-md px-3 py-2 hover:text-slate-100 hover:bg-cyan-600 hover:cursor-pointer">
              Remove
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WishlistCard