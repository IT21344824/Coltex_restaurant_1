import React from 'react';

const Cart_header = () => {
    return (
        <div className='w-full'>
            <div className='ml-10 my-10'>
                <div className='flex items-center'>
                    <span className='flex items-center mr-3'>
                        <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
                        </svg>
                    </span>
                    <h1 className='text-4xl font-bold'>Orders Continue</h1>
                </div>
                    
                <hr className='w-2/3 border-2 border-black mb-4' />
                <h2 className='text-2xl font-semibold mt-5 pl-7'>Orders cart</h2>
                <p className='pl-7'>You have 3 items in your cart</p>
            </div>
            <div className='flex'>
                <img src="../assets/cart-imgs/rice-1.png" alt="" className='h-60 w-1/4 object-cover' />
                <img src="../assets/cart-imgs/buger-1.png" alt="" className='h-60 w-1/4 object-cover' />
                <img src="../assets/cart-imgs/rice-2.jpg" alt="" className='h-60 w-1/4 object-cover' />
                <img src="../assets/cart-imgs/buger-2.png" alt="" className='h-60 w-1/4 object-cover' />
            </div>
        </div>
    );
}

export default Cart_header;
