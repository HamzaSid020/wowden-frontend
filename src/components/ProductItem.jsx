import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

// ProductItem component to display individual product details
const ProductItem = ({ id, image, name, price }) => {
  
    // Access the currency value from ShopContext
    const { currency } = useContext(ShopContext);
  
    return (
        // Link to the product detail page based on the product ID
        <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
            <div className='overflow-hidden'>
                {/* Product image with hover effect */}
                <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt={name} />
                {/* Product name */}
                <p className='pt-3 pb-1 text-sm'>{name}</p>
                {/* Product price with currency symbol */}
                <p className='text-sm font-medium'>{currency}{price}</p>
            </div>
        </Link>
    );
}

export default ProductItem;
