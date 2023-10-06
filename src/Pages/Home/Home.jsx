import React from 'react';
import Navbar from '../../Shared/Navbar';
import { FaArrowRight } from 'react-icons/fa';
import Slider from '../../components/SlideCard';
import SlideCard from '../../components/SlideCard';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';



const Home = () => {
    return (

        <div>
            <Helmet>
                <title>goTrip</title>
            </Helmet>

            <div className="items-center bg-blend-overlay bg-opacity-80 bg-black bg-center bg-cover min-h-screen w-full" style={{ backgroundImage: 'url(https://i.ibb.co/F4dCDQz/Rectangle-1.png)' }}>
                <div className='container mx-auto'>
                    <div className="text-white">
                        <Navbar></Navbar>
                    </div>
                    <div className='px-12 mx-auto grid grid-cols-3 min-h-screen items-center'>
                        <div className=' text-white '>
                            <p className='font-bebas text-8xl'>cox's bazar</p>
                            <p className='font-montserrat text-xl'>
                                Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...
                            </p>
                            <Link to="/search" className="btn  bg-yellow-500 border-none px-10">Booking <FaArrowRight></FaArrowRight></Link>
                        </div>
                        <div className='col-span-2 ml-10'>
                            <SlideCard></SlideCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Home;