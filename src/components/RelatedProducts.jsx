import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

// RelatedProducts component to display products related by category and subCategory
const RelatedProducts = ({ category, subCategory }) => {

    // Access the products array from ShopContext
    const { products } = useContext(ShopContext);
    // State to hold related products
    const [related, setRelated] = useState([]);

    useEffect(() => {
        // Ensure products array is not empty
        if (products.length > 0) {
            // Create a copy of products array
            let productsCopy = products.slice();

            // Filter products by category and subCategory
            productsCopy = productsCopy.filter((item) => item.category === category);
            productsCopy = productsCopy.filter((item) => item.subCategory === subCategory);

            // Set related products, limit to 5
            setRelated(productsCopy.slice(0, 5));
        }
    }, [products, category, subCategory]); // Dependencies for useEffect

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                {/* Title for the related products section */}
                <Title text1={'RELATED'} text2={'PRODUCTS'} />
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {/* Render related products */}
                {related.map((item, index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))}
            </div>
        </div>
    );
}

export default RelatedProducts;
