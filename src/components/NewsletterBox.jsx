import React, { useState } from 'react';

const NewsletterBox = () => {
    // State to manage email input
    const [email, setEmail] = useState('');

    // Handler for form submission
    const onSubmitHandler = (event) => {
        event.preventDefault();
        // Add form submission logic here
        console.log('Email submitted:', email);
    };

    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
            <p className='text-gray-400 mt-3'>
                Subscribe to our newsletter and be the first to know about exclusive deals, new arrivals, and special events
            </p>
            <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <label htmlFor='newsletter-email' className='sr-only'>Email Address</label>
                <input
                    id='newsletter-email'
                    className='w-full sm:flex-1 outline-none px-2 py-1'
                    type='email'
                    placeholder='Enter your Email Address'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    type='submit'
                    className='bg-black text-white text-xs px-4 py-2 sm:px-10 sm:py-4'
                >
                    SUBSCRIBE
                </button>
            </form>
        </div>
    );
};

export default NewsletterBox;
