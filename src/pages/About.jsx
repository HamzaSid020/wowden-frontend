import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='About Wowden' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            At Wowden, we are passionate about bringing the timeless beauty and elegance of wood into your home. 
            Our exclusive range of handcrafted wooden products reflects the rich heritage of Pakistani craftsmanship, 
            blending traditional techniques with modern design sensibilities.
          </p>
          <p>
            Each piece in our collection is a testament to the skill and dedication of our artisans, who meticulously 
            craft every item to ensure the highest standards of quality and durability. Whether you're looking for 
            unique serving dishes, elegant utensils, or beautifully crafted furniture, Wowden offers products that 
            combine functionality with aesthetic appeal.
          </p>
          <b className='text-gray-800'> Our Mission</b>
          <p>
            Our mission is to create lasting impressions by providing our customers with authentic, high-quality wooden 
            products that bring warmth and sophistication to any space. We believe in the power of sustainable materials 
            and are committed to promoting eco-friendly practices in every aspect of our business.
          </p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row  text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-800'>
            We take pride in the quality of our products. Every item undergoes strict quality control to ensure it 
            meets our high standards of craftsmanship and durability.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-800'>
            Shopping with Wowden is easy and convenient. Our user-friendly website allows you to browse our collection 
            and place orders from the comfort of your home.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-800'>
            We are committed to providing exceptional customer service. Our team is here to assist you with any 
            questions or concerns, ensuring a smooth and satisfying shopping experience.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About