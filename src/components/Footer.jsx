import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            {/* Add some space before the footer */}
            <br />

            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 text-sm'>
                {/* Footer Logo and Description */}
                <div>
                    <img src={assets.logo} className='mb-5 w-32' alt='Logo' />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        At Wowden, we blend tradition with craftsmanship to bring you exquisite wooden products. Discover our range of handcrafted items designed to add elegance to your home.
                    </p>
                </div>

                {/* Company Links Section */}
                <div>
                    <p className='text-xl font-medium mb-5'>Company</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li><a href="/" className='hover:text-black'>Home</a></li>
                        <li><a href="/about" className='hover:text-black'>About Us</a></li>
                        <li><a href="/delivery" className='hover:text-black'>Delivery</a></li>
                        <li><a href="/privacy-policy" className='hover:text-black'>Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Contact Information Section */}
                <div>
                    <p className='text-xl font-medium mb-5'>Get in Touch</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li><a href="tel:+15483844433" className='hover:text-black'>+15483844433</a></li>
                        <li><a href="mailto:contact@foreveryone.com" className='hover:text-black'>contact@foreveryone.com</a></li>
                    </ul>
                </div>

                {/* Footer Copyright Section */}
                <div className='col-span-full'>
                    <hr />
                    <p className='text-sm text-center text-gray-600'>© 2024 Wowden.com - All Rights Reserved.</p>
                </div>

            </div>
        </div>
    )
}

export default Footer
