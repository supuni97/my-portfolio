import React from 'react';
import heroImg from '../../assets/images/myPhoto.jpg';

const Hero = () => {
    return (
        <section className='pt-0' id='about'>
            <div className='container pt-14'>
                <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                    {/*hero left start */}
                    <div className='w-full md:basis-1/2'>
                        <h5 data-aos='fade-right' data-aos-duration='1500' className='text-headingColor font-[600] text-[16px]'>Hello welcome</h5>
                        <h1
                            data-aos='fade-up'
                            data-aos-duration='1500'
                            className='text-headingColor font-[800] text-[1.7rem] sm:text-[40px] leading-[35px] sm:leading-[48px] mt-5'
                        >
                          
                            <span className=' text-[2rem] text-purple-950 sm:text-[45px]'>
                                I'm Supuni Bandara
                            </span>
                            <br />
                            <span className='text-[1.6rem] text-gray-800 sm:text-[38px]'>
                                Software Engineering Enthusiast
                            </span>
                        </h1>

                        <p data-aos='fade-left'
                            data-aos-duration='1500'
                            className='flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10'
                        >
                            <span><i class="ri-apps-2-line"></i></span>
                            Welcome to my portfolio! I am a final-year undergraduate in Software Engineering at the University of Kelaniya, Sri Lanka. With a passion for developing innovative solutions and a keen interest in Web development, Mobile App development & Data Science and Machine Learning, I am dedicated to leveraging technology to solve real-world problems. Throughout my academic journey, I have honed my skills in various programming languages and development frameworks, and I am eager to contribute to the tech industry with my creativity and technical expertise. </p>

                        <div className='flex items-center gap-9 mt-14 ml-3'>
                            <span
                                className=' font-[600] text-[18px] text-smallTextColor'
                            >Follow Me:</span>
                            <span>
                                <a href='https://www.linkedin.com/in/supuni-bandara-4656a524a/' className=' font-[600] text-[24px] text-smallTextColor'
                                ><i class="ri-linkedin-box-fill"></i></a>
                            </span>
                            <span>
                                <a href='https://github.com/supuni97' className=' font-[600] text-[24px] text-smallTextColor'
                                ><i class="ri-github-fill"></i></a>
                            </span>
                            <span>
                                <a href='https://medium.com/@sitharabandara' className=' font-[600] text-[24px] text-smallTextColor'
                                ><i class="ri-medium-fill"></i></a>
                            </span>
                        </div>

                    </div>
                    {/*hero left end */}

                    {/*hero img */}
                    <div className='basis-1/3 mt-10 sm:mt-0'>
                        <figure className='flex items-center justify-center'>
                            <img src={heroImg} alt='' />
                        </figure>
                    </div>
                    {/*hero img */}

                </div>
            </div>
        </section>
    )
}

export default Hero;
