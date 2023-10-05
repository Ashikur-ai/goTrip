import React from 'react';
import Navbar from '../../Shared/Navbar';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AiOutlineStar } from "react-icons/ai";


const SearchPage = () => {
    return (
        
        <div className='mb-40'>
            <Helmet>
                <title>Search</title>
            </Helmet>
            <div className='container mx-auto'>
                <div className='text-black'>
                    <Navbar></Navbar>
                    <hr />
                </div>
            </div>
            <div className='px-24 mx-auto space-y-10'>
                <div className='mt-10'>
                    <p>252 stays Apr 13-17 3 guests</p>
                    <p className='text-3xl font-bold'>Stay in Cox’s Bazar</p>
                </div>
                <div className='grid grid-cols-4 '>

                    <div className='col-span-2 space-y-8'>
                        {/* 1st card */}
                        <div>
                            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                                    <img
                                        src="https://i.ibb.co/xCq2m5d/Rectangle-27.png"
                                        alt="image"
                                        className="h-full w-full object-cover"
                                    />


                                </div>
                                <div className="p-6">
                                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">

                                    </h6>
                                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                        Light bright airy stylish apt & safe
                                        peaceful stay
                                    </h4>
                                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                        4 guests   2 bedrooms   2 beds   2 baths
                                        <br />
                                        Wif Air conditioning Kitchen
                                        <br />
                                        Cancellation fexibility availiable
                                    </p>
                                    <div className='flex justify-between'>
                                        <div className='flex'>
                                            <AiOutlineStar className='text-yellow-600 text-2xl'></AiOutlineStar>
                                            <span>4.6/(20)</span>
                                        </div>

                                        <p>$35/night</p>
                                        <p>$156 total</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                                    <img
                                        src="https://i.ibb.co/xCq2m5d/Rectangle-27.png"
                                        alt="image"
                                        className="h-full w-full object-cover"
                                    />


                                </div>
                                <div className="p-6">
                                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">

                                    </h6>
                                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                        Light bright airy stylish apt & safe
                                        peaceful stay
                                    </h4>
                                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                        4 guests   2 bedrooms   2 beds   2 baths
                                        <br />
                                        Wif Air conditioning Kitchen
                                        <br />
                                        Cancellation fexibility availiable
                                    </p>
                                    <div className='flex justify-between'>
                                        <div className='flex'>
                                            <AiOutlineStar className='text-yellow-600 text-2xl'></AiOutlineStar>
                                            <span>4.6/(20)</span>
                                        </div>

                                        <p>$35/night</p>
                                        <p>$156 total</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                                    <img
                                        src="https://i.ibb.co/xCq2m5d/Rectangle-27.png"
                                        alt="image"
                                        className="h-full w-full object-cover"
                                    />


                                </div>
                                <div className="p-6">
                                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">

                                    </h6>
                                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                        Light bright airy stylish apt & safe
                                        peaceful stay
                                    </h4>
                                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                        4 guests   2 bedrooms   2 beds   2 baths
                                        <br />
                                        Wif Air conditioning Kitchen
                                        <br />
                                        Cancellation fexibility availiable
                                    </p>
                                    <div className='flex justify-between'>
                                        <div className='flex'>
                                            <AiOutlineStar className='text-yellow-600 text-2xl'></AiOutlineStar>
                                            <span>4.6/(20)</span>
                                        </div>

                                        <p>$35/night</p>
                                        <p>$156 total</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className='col-span-2 '>
                        <img className='rounded-lg mx-10 h-full w-auto' src="https://i.ibb.co/rm8BmHh/map.png" alt="" />
                    </div>
                   
                </div>
            </div>
            
            

        </div>
    );
};

export default SearchPage;