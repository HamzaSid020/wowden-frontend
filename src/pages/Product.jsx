import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductData = () => {
      const foundProduct = products.find((item) => item._id === productId);
      if (foundProduct) {
        setProductData(foundProduct);
        setImage(foundProduct.image[0]);
        setLoading(false);
      } else {
        // Handle the case where productData is not found
        setProductData(null);
        setLoading(false);
      }
    };

    fetchProductData();
  }, [productId, products]);

  if (loading) return <div className='text-center py-10'>Loading...</div>;

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  key={index}
                  className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                  alt={`Thumbnail of ${productData.name} - ${index}`}
                />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img
              className='w-full height-auto'
              src={image}
              alt={productData.name}
            />
          </div>
        </div>

        {/* Product Info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt='Star icon' className='w-3.5' />
            <img src={assets.star_icon} alt='Star icon' className='w-3.5' />
            <img src={assets.star_icon} alt='Star icon' className='w-3.5' />
            <img src={assets.star_icon} alt='Star icon' className='w-3.5' />
            <img src={assets.star_dull_icon} alt='Dull star icon' className='w-3.5' />
            <p className='p1-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
          >
            ADD TO CART
          </button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original Product</p>
            <p>Cash On delivery is available on this product</p>
            <p>Easy return & exchange policy within 7 days</p>
          </div>
        </div>
      </div>

      {/* Description & Review Section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <b className='border px-5 py-3 text-sm'>Reviews (122)</b>
        </div>
        <div className='flex flex-col gap-4 border px-6 text-sm text-gray-500'>
          <br />
          <p>
            Elevate your dining experience with our exquisite handcrafted wooden serving platter. Made from premium-quality wood, this elegant piece features a natural grain pattern that adds a touch of sophistication to any table setting. Perfect for serving appetizers, main courses, or even desserts, its versatile design makes it a must-have for every kitchen. The platter is finished with a food-safe sealant to ensure durability and easy maintenance. Whether you're hosting a dinner party or enjoying a casual meal, this serving platter is sure to impress.
          </p>
          <p>
            Each platter is meticulously crafted by skilled artisans, ensuring that every piece is unique and of the highest quality. The smooth surface and sturdy build make it ideal for daily use, while the timeless design ensures it complements a variety of decor styles. Add a touch of elegance to your dining experience with this beautifully crafted wooden serving platter.
          </p>
          <br />
        </div>
      </div>

      {/* Display related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className='text-center py-10'>Product not found.</div>
  );
};

export default Product;
