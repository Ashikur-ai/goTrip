import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../Shared/Navbar';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Destination = () => {
    return (
        <div>
            <Helmet>
                <title>goTrip - Destination</title>
            </Helmet>

            <div className="items-center bg-blend-overlay bg-opacity-80 bg-black bg-center bg-cover min-h-screen w-full" style={{ backgroundImage: 'url(https://i.ibb.co/F4dCDQz/Rectangle-1.png)' }}>
                <div className='container mx-auto'>
                    <div className='text-white'>
                        <Navbar></Navbar>
                    </div>
                    <div className='px-12 container mx-auto grid grid-cols-5 min-h-screen items-center'>
                        <div className='col-span-3 text-white '>
                            <p className='font-bebas text-8xl'>cox's bazar</p>
                            <p className='font-montserrat text-xl'>
                                Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.
                            </p>
                            
                        </div>
                        <div className='col-span-2 ml-10 bg-base-100 rounded-lg'>
                            <form className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Origin</span>
                                    </label>
                                    <input type="text" name='origin' placeholder="Dhaka" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Destination</span>
                                    </label>
                                    <input type="text" name='destination' placeholder="Cox's Bazar" className="input input-bordered" required />
                                </div>

                                <div className='flex justify-between'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">From</span>
                                        </label>
                                        <input type="date" name='from' placeholder="" className="input input-bordered" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">To</span>
                                        </label>
                                        <input type="date" name='to' placeholder="" className="input input-bordered" required />
                                    </div>
                                </div>
                                
                                <div className="form-control mt-6">
                                    <button className="btn bg-yellow-500 border-none text-black"><Link to="/search">Start Booking</Link></button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;