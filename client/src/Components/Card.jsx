import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({data}) => {

  return (
  <div className='m-2 w-fit p-3 rounded-lg '>
    <Link to='pet' state={{data}}>
      <img className='w-72 h-72 object-cover' src={data.img} />
      <div className=''>
        <div className='text-2xl w-72 pt-2 pb-3 text-center font-semibold'>
          {data.name}
        </div>
        <div className='text-center text-[#3b8d39] pb-4 font-medium text-3xl'>
          ₹ {data.rate}
        </div>
      </div>
    </Link>
  </div>
  )
}

export default Card