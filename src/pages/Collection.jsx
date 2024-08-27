import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  // Destructure necessary values from ShopContext
  const { products, search, showSearch } = useContext(ShopContext);
  
  // State management
  const [showFilter, setShowFilter] = useState(false); // Toggle filter visibility
  const [filterProducts, setFilterProducts] = useState([]); // Filtered products
  const [category, setCategory] = useState([]); // Selected categories
  const [subCategory, setSubCategory] = useState([]); // Selected subcategories
  const [sortType, setSortType] = useState('relevant'); // Sorting criteria

  // Toggle function for category checkboxes
  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) => 
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Toggle function for subcategory checkboxes
  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) => 
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Apply filters and sorting to products
  const applyFilterAndSort = () => {
    if (!products) return;
    
    let productsCopy = products.slice(); // Create a copy of the products array

    // Filter by search term if applicable
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    // Filter by selected categories
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    
    // Filter by selected subcategories
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }
    
    // Sort products based on selected sort type
    switch (sortType) {
      case 'low-high':
        productsCopy.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        productsCopy.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    
    setFilterProducts(productsCopy); // Update the filtered products state
  };

  // Apply filters and sorting whenever dependencies change
  useEffect(() => {
    applyFilterAndSort();
  }, [category, subCategory, sortType, search, showSearch, products]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p
          className='my-2 text-wl flex items-center cursor-pointer gap-2'
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt='Dropdown icon indicating filter state'
          />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Platter' onChange={toggleCategory} /> Platter
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Caddy' onChange={toggleCategory} /> Caddy
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Table' onChange={toggleCategory} /> Table
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Best Sellers' onChange={toggleCategory} /> Best Sellers
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Accessories' onChange={toggleCategory} /> Accessories
            </p>
          </div>
        </div>

        {/* Subcategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Tableware' onChange={toggleSubCategory} /> Tableware
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Accessories' onChange={toggleSubCategory} /> Accessories
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Furniture' onChange={toggleSubCategory} /> Furniture
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Kitchen' onChange={toggleSubCategory} /> Kitchen
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Product Display */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTION'} />
          {/* Product Sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort By: Relevant</option>
            <option value="low-high">Sort By: Low to High</option>
            <option value="high-low">Sort By: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
