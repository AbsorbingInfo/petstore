import { useLocation } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { addWishlistItemAsync } from "../slices/wishlistSlice"

const Details = () => {
  const location = useLocation();
  const data = location.state.data;
  const dispatch = useDispatch()

  const handleAddToWishlist = () => {
    dispatch(addWishlistItemAsync(data))
    alert("Pet added to favourites!")
  }

  return (
    <div className="w-full xl:w-9/12 mx-auto h-[75vh]">
      <div className="flex justify-center mt-24 mx-4">
        <div>
          <img src={data.img} className="w-[480px] h-[480px] object-cover" />
        </div>
        <div className="w-[480px]">
          <div className="text-center font-semibold text-3xl my-5 mx-16">
            {data.name}
          </div>
          <div className="font-base text-xl my-5 mx-16">
            Meet our adorable furry friend, a playful and loving companion looking for a forever home. 
            This delightful pet is sure to bring joy and laughter to your life. 
            Don't miss out on the chance to make memories with this charming addition to your family.
          </div>
          <div className="text-center text-[#3b8d39] font-semibold text-3xl">
          ₹ {data.rate}
          </div>
          <div className="flex justify-center text-lg font-medium mt-8">
            <div onClick={handleAddToWishlist} className="mr-3 bg-rose-200 rounded-md px-3 py-2 hover:text-slate-100 hover:bg-rose-600 hover:cursor-pointer">
              Add to Favourite
            </div>
            <div className="ml-3 bg-cyan-200 rounded-md px-3 py-2 hover:text-slate-100 hover:bg-cyan-600 hover:cursor-pointer">
              Enquire Now
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details