import React from 'react'
import { items } from './Cart_item_details'; // Use named import here

const Cart_content = () => {


    return (
        <div className='mx-35 my-[90px]'>
            <div className='flex flex-wrap justify-center'>
                {items.map(item => (
                    <div key={item.id}
                        // style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}
                        className='shadow-lg border-solid border-2 ml-5 my-5 p-8 rounded-lg '
                    >
                        <div>
                            <div className='flex items-center justify-between mb-5'>
                                <h3 className='text-2xl font-bold first-letter:uppercase'>{item.name}</h3>
                                <span className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                    <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                </svg></span>
                            </div>
                            <div className='flex gap-7'>
                                <div>
                                    {/* <p><strong className='text-orange-400'>Type:</strong> {item.type}</p> */}
                                    <img src={item.img} alt="" className='h-60 w-60 object-cover  rounded-lg' />
                                    <div className='flex items-center justify-around mt-6 '>
                                        <div className='bg-slate-400  rounded px-3  flex justify-between items-center gap-4'>
                                            <span className='font-bold cursor-pointer'>
                                                <svg class="w-[16px] h-[16px] text-orange-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14" />
                                                </svg>
                                            </span>
                                            <p> <strong>{item.qty}</strong> </p>
                                            <span className='font-bold cursor-pointer'>
                                                <svg class="w-[16px] h-[16px] text-orange-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5" />
                                                </svg>

                                            </span>
                                        </div>
                                        <p className='text-lg'><strong>${item.total}</strong> </p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <p><strong className='text-orange-400'>Size :</strong> {item.size}</p>
                                    <p><strong className='text-orange-400'>Option :</strong> {item.option}</p>
                                    <div >
                                        <p><strong className='text-orange-400'>Add-ons :</strong></p>
                                        {item.add_ons.map(add_ons_item => (
                                            <p key={add_ons_item} className='ml-4'> {add_ons_item} ,</p>
                                        ))}

                                    </div>
                                    <div>
                                        <p><strong className='text-orange-400'>Remove Ingredients :</strong></p>
                                        {item.remove_I.map(remove_item => (
                                            <p key={remove_item} className='ml-4'> {remove_item} ,</p>
                                        ))}
                                    </div>
                                </div>

                                <hr className='border-gray-400 border-2 h-auto self-stretch rounded-sm' style={{ width: '2px' }} />
                                
                                <div className='flex flex-col gap-4'>
                                    {item.type === 'MIX Rice' && (
                                        <>
                                            <div>
                                                <p><strong className='text-orange-400'>Rice Type : </strong> </p>
                                                <p className='ml-4'> {item.Rice_type}</p>

                                            </div>
                                            <div>
                                                <p><strong className='text-orange-400'>Spice Level : </strong> </p>
                                                <p className='ml-4'> {item.spice_lvl}</p>

                                            </div>

                                        </>
                                    )}
                                    {item.type === 'Buger' && (
                                        <>
                                            <div>
                                                <p><strong className='text-orange-400'>Bun Options : </strong> </p>
                                                <p className='ml-4'> {item.Bun_Options}</p>

                                            </div>
                                            <div>
                                                <p><strong className='text-orange-400'>Cooking Preference : </strong> </p>
                                                <p className='ml-4'> {item.cooking_preference}</p>

                                            </div>

                                        </>
                                    )}

                                    <div><strong className='text-orange-400'>Sauce:</strong>
                                        {item.sauce.map(sauce_item => (
                                            <p key={sauce_item} className='ml-4'>{sauce_item} ,</p>
                                        ))}
                                    </div>
                                    <div>
                                        <p><strong className='text-orange-400'>Dietary Preferences : </strong> </p>
                                        <p className='ml-4'> {item.Dietary}</p>

                                    </div>
                                </div>
                            </div>

                        </div>




                    </div>
                ))}
            </div>

            <div className='flex justify-center mt-10'>
                <div className='py-5 w-2/3 flex bg-slate-200  border-solid border-2 shadow-lg rounded-xl '>
                    <div className=' w-1/2'>
                        <div className='flex justify-between mx-20 items-center'>
                            <p>Subtotal</p>
                            <p>$998</p>
                        </div>
                        <div className='flex justify-between mx-20 items-center'>
                            <p>Delivery fee</p>
                            <p>$20</p>
                        </div>
                        <div className='flex justify-between mx-20 items-center'>
                            <p>Coupon</p>
                            <p>No</p>
                        </div>

                    </div>

                    <hr className='border-gray-300 border-2 h-auto self-stretch rounded-sm' style={{ width: '2px' }} />
                    <div className='flex flex-col w-1/2 justify-center bg'>
                        <div className='flex justify-between text-xl font-bold mx-20'>
                            <p>Total</p>
                            <p>$118</p>
                        </div>

                        <button type="button" 
                        className="text-white bg-sky-400 hover:bg-sky-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg 
                        text-sm  py-2.5  mt-2 mx-20 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800"
                        > Check out</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart_content
