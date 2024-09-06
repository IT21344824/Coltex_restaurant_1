import React from 'react';

const Footer = () => {
    return (
        <div className='bg-slate-500 text-white relative'>
            {/* <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-0 h-0">
                <div className="w-0 h-0 border-l-[30vw] border-r-[30vw] border-b-[30px] border-l-transparent border-r-transparent border-b-[#374151] absolute top-0 left-1/2 transform -translate-x-1/2"></div>
            </div> */}
            <footer className="flex mx-40 items-center justify-between p-4 mt-16 ">
                <div className="flex flex-col ">
                    <h3 className="text-sm font-semibold leading-6 items-start">LOGO</h3>
                    <h3 className="text-sm font-semibold leading-6">Name</h3>

                    <ul role="list" className="mt-6 text-white">
                        <li><a className="text-sm leading-6 hover:text-gray-300" href="#">497 Evergreen Rd. Roseville, CA 95673</a></li>
                        <li><a className="text-sm leading-6 hover:text-gray-300" href="#">+44 345 678 903</a></li>
                        <li><a className="text-sm leading-6 hover:text-gray-300" href="#">luxury_hotels@gmail.com</a></li>
                    </ul>
                </div>

                <div className="flex flex-col items-center mt-10 md:mt-0">
                    <ul role="list" className="mt-6 space-y-4 text-white">
                        <li><a className="text-sm leading-6 hover:text-gray-300" href="#">About Us</a></li>
                        <li><a className="text-sm leading-6 hover:text-gray-300" href="#">Contact</a></li>
                        <li><a className="text-sm leading-6 hover:text-gray-300" href="#">Terms & Condition</a></li>
                    </ul>
                </div>

                <div className="flex flex-col items-start mt-10 md:mt-0 ">
                    <ul role="list" className="mt-6 text-white ">
                        <li>
                            <a href="#!" type="button" className="text-sm leading-6 hover:text-gray-300">
                                <div className='flex items-center gap-2'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className='text-white w-3 h-3' // Adjust size here
                                        viewBox="0 0 320 512">
                                        <path
                                            d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                    </svg>
                                    <span className="flex text-white items-center justify-center gap-2">
                                        Facebook
                                    </span>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="#!" type="button" className="text-sm leading-6 hover:text-gray-300">
                                <div className='flex items-center gap-2'>
                                    <svg className='text-white w-3 h-3' // Adjust size here
                                        fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                                        </path>
                                    </svg>
                                    <span className="flex text-white items-center justify-center gap-2">Twitter</span>

                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#!" type="button" className="text-sm leading-6 hover:text-gray-300" data-twe-ripple-init>
                                <div className='flex items-center gap-2'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className='text-white w-3 h-3' // Adjust size here
                                        viewBox="0 0 448 512">
                                        <path
                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                    </svg>


                                    <span className="flex text-white items-center justify-center gap-2">Instagram</span>

                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-start mt-10 md:mt-0 ">
                    <h3 className="text-sm font-semibold leading-6 text-white">Subscribe to our Newsletter</h3>
                    <form className="mt-6 flex flex-col sm:flex-row sm:max-w-md">
                        <label htmlFor="email-address" className="sr-only">Email address</label>
                        <input
                            type="email"
                            name="email"
                            id="email-address"
                            autoComplete="email"
                            required
                            className="w-full min-w-0 border-2 border-[#E0B973] appearance-none rounded-l-lg bg-white px-2 text-base leading-7 text-gray-900 placeholder-gray-400 shadow-sm focus:border-[#E0B973] focus:ring-[#E0B973] sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                            placeholder="Email Address"
                        />
                        <div className="mt-0">
                            <div className="flex justify-end">
                                <button
                                    className="inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-r-lg shadow-sm focus:outline-none ring-2 ring-offset-2 ring-transparent ring-offset-transparent disabled:bg-gray-400 appearance-none text-white bg-[#E0B973] hover:bg-[#d2a872] focus:ring-[#d2a872] w-full"
                                    type="submit"
                                >
                                    <div className="relative">
                                        <div className="">Ok</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
