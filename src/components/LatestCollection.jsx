import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  // Access the products from the ShopContext
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    // Update the latestProducts state with the first 10 products from the products array
    if (products && products.length > 0) {
      setLatestProducts(products.slice(0, 10));
    }
  }, [products]);

  // Display loading message while products are being fetched
  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div className='my-10'>
      {/* Section Title */}
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTION'} />
        {/* Description Text */}
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Explore Wowden’s newest arrivals and elevate your home with our exclusive wooden products. From elegantly handcrafted serving dishes to uniquely designed tables, our latest collection features exquisite woodwork that combines tradition with contemporary style.
        </p>
      </div>
      {/* Rendering Latest Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        }
      </div>
    </div>
  );
};

export default LatestCollection;
