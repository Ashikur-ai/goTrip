import React from 'react';
import Navbar from '../../Shared/Navbar';
import { FaArrowRight } from 'react-icons/fa';
import Slider from '../../components/SlideCard';
import SlideCard from '../../components/SlideCard';



const Home = () => {
    return (

        <div>
            <div className="items-center bg-blend-overlay bg-opacity-80 bg-black bg-center bg-cover min-h-screen w-full" style={{ backgroundImage: 'url(https://i.ibb.co/F4dCDQz/Rectangle-1.png)' }}>
                <div className='container mx-auto'>
                    <Navbar></Navbar>
                    <div className='grid grid-cols-3 min-h-screen items-center'>
                        <div className=' text-white '>
                            <p className='font-bebas text-8xl'>cox's bazar</p>
                            <p className='font-montserrat text-xl'>
                                Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...
                            </p>
                            <a className="btn  bg-yellow-500 border-none px-10">Booking <FaArrowRight></FaArrowRight></a>
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