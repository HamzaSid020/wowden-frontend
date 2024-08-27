import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      {/* Title Section */}
      <div className='text-center text-2xl pt-10 border-t'>
        {/* Reusable Title component for the Contact page */}
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Main Content Section */}
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        {/* Contact Image */}
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt='Contact Us' />

        {/* Contact Information */}
        <div className='flex flex-col justify-center items-start gap-6'>
          {/* Store Information Title */}
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          
          {/* Store Address */}
          <p className='text-gray-500'>
            245484564 William Street <br/> 
            Suite 54, Washington, USA 
          </p>

          {/* Contact Details */}
          <p className='text-gray-500'>
            Tel: (415) 5555 <br /> 
            Email: 123@gmail.com
          </p>

          {/* Careers Information Title */}
          <p className='font-semibold text-xl text-gray-600'>Careers at Wowden</p>
          
          {/* Careers Information */}
          <p className='text-gray-500'>
            Learn More about our job openings
          </p>

          {/* Explore Jobs Button */}
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Newsletter Subscription Section */}
      <NewsletterBox />
    </div>
  )
}

export default Contact
