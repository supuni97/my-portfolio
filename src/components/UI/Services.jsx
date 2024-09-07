import React from 'react';
import webImg from '../../assets/images/web.png';
import mobileImg from '../../assets/images/mobile.png';
import dsImg from '../../assets/images/ds.png';

const Services = () => {
    return (
        <section id='services'>
            <div className='container lg:pt-5'>
                <div className='text-center'>
                    <h2 className='font-[800] text-headingColor text-[2.4rem] mb-5'>What do I help</h2>
                    <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in justo imperdiet, facilisis lacus et, efficitur turpis. Etiam aliquet nibh ac mi porttitor volutpat. Integer mollis eros quis nulla rutrum bibendum sit amet sed mauris. Ut vitae felis malesuada, pulvinar arcu eu, dapibus lorem. Curabitur efficitur auctor eros, id fringilla turpis dignissim vitae. Praesent ac pharetra enim.</p>
                </div>
                <div className='flex flex-col items-center sm:py-12'>
                    <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
                        <div className='relative text-gray-700 antialiased text-sm font-semibold'>
                            {/* Cards */}
                            <div className='mt-6 sm:mt-0 sm:mb-12 flex flex-col items-center'>
                                {/* First card */}
                                <div className='w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mb-6'>
                                    <div
                                        className='p-4 bg-white rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 flex flex-col items-center'
                                        data-aos='fade-right'
                                        data-aos-duration='1200'>
                                        <h3 className='font-[700] text-primaryColor mb-3 group-hover:text-white group-hover:font-[600] text-xl'>Web Development</h3>
                                        <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <div className='rounded-full bg-primaryColor border-white w-16 h-16 flex items-center justify-center'>
                                            <img src={webImg} alt='Frontend Development' className='w-10 h-10 object-cover rounded-full' />
                                        </div>
                                    </div>
                                </div>
                                {/* Second card */}
                                <div className='w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mb-6'>
                                    <div
                                        className='p-4 bg-white rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 flex flex-col items-center'
                                        data-aos='fade-right'
                                        data-aos-duration='1200'>
                                        <h3 className='font-[700] text-primaryColor mb-3 group-hover:text-white group-hover:font-[600] text-xl'>Mobile Development</h3>
                                        <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <div className='rounded-full bg-primaryColor border-white w-16 h-16 flex items-center justify-center'>
                                            <img src={mobileImg} alt='Mobile Development' className='w-10 h-10 object-cover rounded-full' />
                                        </div>
                                    </div>
                                </div>
                                {/* Third card */}
                                <div className='w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mb-6'>
                                    <div
                                        className='p-4 bg-white rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 flex flex-col items-center'
                                        data-aos='fade-right'
                                        data-aos-duration='1200'>
                                        <h3 className='font-[700] text-primaryColor mb-3 group-hover:text-white group-hover:font-[600] text-xl'>Data Science & ML</h3>
                                        <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <div className='rounded-full bg-primaryColor border-white w-16 h-16 flex items-center justify-center'>
                                            <img src={dsImg} alt='UI/UX Design' className='w-10 h-10 object-cover rounded-full' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Add more cards here as needed */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;
