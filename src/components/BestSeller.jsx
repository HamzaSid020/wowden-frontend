import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    // Access context values directly
    const { products } = useContext(ShopContext); 
    
    // Initialize state for best sellers
    const [bestSellers, setBestSellers] = useState([]); 

    useEffect(() => {
        // Check if products exist and have items
        if (products && products.length > 0) {
            // Filter out the best-selling products
            const bestProducts = products.filter(item => item.bestseller);
            // Set the top 5 best sellers to the state
            setBestSellers(bestProducts.slice(0, 5));
        }
    }, [products]);
    
    // Display a loading message if products are not yet available
    if (!products) {
        return <div>Loading...</div>;
    }

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                {/* Title component for best sellers */}
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Uncover the favorites of our discerning customers with Wowden’s best-selling wooden products. Our top picks include timeless serving platters, intricately designed utensils, and versatile wooden crockery that have become essential in homes.
                </p>
            </div>
            {/* Render best sellers here */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestSellers.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    );
};

export default BestSeller;
