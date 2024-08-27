import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

// SearchBar component to handle the search functionality and display based on the location
export const SearchBar = () => {
  // Access search state and functions from ShopContext
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  // Local state to control visibility of the search bar based on location
  const [visible, setVisible] = useState(false);
  // Hook to get current location object
  const location = useLocation();

  useEffect(() => {
    // Update visibility based on the current path
    if (location.pathname.includes('collection')) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  // Render the search bar if showSearch is true and the search bar is visible based on location
  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='flex-1 outline-none bg-inherit text-sm'
          type='text'
          placeholder='Search'
          aria-label='Search'
        />
        <img
          className='w-4'
          src={assets.search_icon}
          alt='Search icon'
        />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className='inline w-3 cursor-pointer'
        src={assets.cross_icon}
        alt='Close search bar'
      />
    </div>
  ) : null;
};
