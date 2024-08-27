import React from 'react';

// Title component to display a formatted title with two parts
const Title = ({ text1, text2 }) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
      {/* Display the first part of the title */}
      <p className='text-gray-500'>
        {text1}
        {/* Display the second part of the title with different styling */}
        <span className='text-gray-700 font-medium'>
          {text2}
        </span>
      </p>
      {/* Line separator for visual enhancement */}
      <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
    </div>
  );
};

export default Title;
