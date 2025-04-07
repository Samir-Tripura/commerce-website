import React from 'react'
import { ShopContext } from '../context/Shopcontext';
import {useState, useContext, useEffect} from 'react';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [visible, setVisible] = useState(false)
    const location = useLocation()



    useEffect(()=>{
      if(location.pathname.includes('collection') ){
        setVisible(true);
      }
      else{
        setVisible(false)
      }
    },[location])




  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center p-5 mb-10">
      <div className="inline-flex item-center justify-center border border-gray-400 px-5 py-2 mx-3 rounded-full w-3/4 sm:w-1/2 ">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <img  className='w-5' src={assets.search} alt="" />
      </div>
      <img onClick={()=>setShowSearch(false)} className='inline w-5 cursor-pointer' src={assets.cross} alt="" />
    </div>
  ) : null;
}

export default SearchBar
