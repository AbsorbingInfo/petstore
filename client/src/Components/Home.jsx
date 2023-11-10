import React,{useState, useEffect} from 'react'
import Card from './Card'
import { PET_STORE_DATA } from '../utils/constants'
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery, setSort } from '../slices/petsSlice';

const Home = () => {
  const pets = useSelector((state) => state.petstore.pets);
  const searchQuery = useSelector((state) => state.petstore.searchQuery);
  const sortOrder = useSelector((state) => state.petstore.sortOrder);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  }

  const handleSort = (e) => {
    dispatch(setSort(e.target.value))
  }

  const filteredAndSortedProducts = [...pets]
  .filter((pet) =>
    pet.name.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.rate - b.rate;
    } else if (sortOrder === 'desc'){
      return b.rate - a.rate;
    } else if (sortOrder === 'desc'){
      return 1;
    }
  });

  return (
    <>
      <div className='flex w-9/12 justify-center mx-auto font-semibold'>
        <div className='flex justify-center mt-3'>
          <input 
          className='border border-emerald-800 h-10' 
          placeholder=' Search Pets'
          onChange={handleSearch}
          />
        </div>
        <div className='mt-2 ml-8'>
          <label htmlFor="rate">Sort by price</label>
          <select className='bg-slate-100 h-10 px-3 mx-2' name="rate" id="rate" onChange={handleSort}>
          <option value="def">Relevance</option>
            <option value="asc">Lowest First</option>
            <option value="desc">Highest First</option>
          </select>
        </div>
      </div>
      <div className='grid place-items-center grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 w-full xl:w-9/12 mx-auto'>
        {filteredAndSortedProducts.map((item,i) => (
          <div className='w-fit' key={item.id}>
            <Card data={item} />
          </div>
          ))}
      </div>
    </>
  )
}

export default Home

// {
//   "mon": {
//     "1": {"startTime": "09:00", "endTime": "10:00",  "subjectCode": "501"},
//     "2": {"startTime": "10:10", "endTime": "11:10",  "subjectCode": "502"}
//   },
//   "tue": {
//     "1": {"startTime": "09:00", "endTime": "10:00",  "subjectCode": "505"},
//     "2": {"startTime": "10:10", "endTime": "11:10",  "subjectCode": "504"}
//   }
// }