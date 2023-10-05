import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const SlideCard = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    

    return (
        <div>
            <Carousel responsive={responsive}>

                <div className='min-h-screen mx-4 pt-64'>
                    <img src="https://i.ibb.co/gWZmbmp/Sreemongol.png" alt="" />
                    <p className='text-white font-bebas text-3xl pl-2 -mt-20 bg-black'>Sremongol</p>
                </div>


                <div className='min-h-screen mx-4 pt-64'>
                    <img src="https://i.ibb.co/Qk7FV55/Sajek.png" alt="" />
                    <p className='text-white font-bebas text-3xl pl-2 -mt-20 bg-black'>Saint Martin</p>
                </div>


                <div className='min-h-screen mx-4 pt-64'>
                    <img src="https://i.ibb.co/n31jGMN/sundorbon.png" alt="" />
                    <p className='text-white font-bebas text-3xl pl-2 -mt-20 bg-black'>Sundarban</p>
                </div>

                <div className='min-h-screen mx-4 pt-64'>
                    <img src="https://i.ibb.co/gWZmbmp/Sreemongol.png" alt="" />
                    <p className='text-white font-bebas text-3xl pl-2 -mt-20 bg-black'>Sremongol</p>
                </div>

                <div className='min-h-screen mx-4 pt-64'>
                    <img src="https://i.ibb.co/gWZmbmp/Sreemongol.png" alt="" />
                    <p className='text-white font-bebas text-3xl pl-2 -mt-20 bg-black'>Sremongol</p>
                </div>


                <div className='min-h-screen mx-4 pt-64'>
                    <img src="https://i.ibb.co/gWZmbmp/Sreemongol.png" alt="" />
                    <p className='text-white font-bebas text-3xl pl-2 -mt-20 bg-black'>Sremongol</p>
                </div>

                

                
                
                
                
            </Carousel>
        </div>
    );
};

export default SlideCard;