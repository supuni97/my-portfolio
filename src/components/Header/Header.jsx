import React from 'react'

const Header = () => {
    return (
        <header className='w-full h-[80px] leading-[80px] flex items-center'>
            <div className='container'>
                <div className='flex items-center justify-between'>
                    {/*Logo start*/}
                    <div className='flex items-center gap-[10px]'>
                        <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center'>
                            M
                        </span>

                        <div className='leading-[20px]'>
                            <h1 className='text-xl text-smallTextColor font-[700]'>Supuni</h1>
                            <p className='text-smallTextColor font-[500] text-[14px]'>personal</p>
                        </div>
                    </div>
                    {/*Logo end*/}

                    {/*Menu start*/}
                    <div className='menu'>
                        <ul className='flex items-center gap-10'>
                            <li><a className=' text-smallTextColor font-[700]' href='#about'>About</a></li>
                            <li><a className=' text-smallTextColor font-[700]' href='#services'>Services</a></li>
                            <li><a className=' text-smallTextColor font-[700]' href='#portfolio'>Portfolio</a></li>
                            <li><a className=' text-smallTextColor font-[700]' href='#contact'>Contact</a></li>
                        </ul>
                    </div>
                    {/*Menu end*/}

                    {/*Menu right start*/}
                    <div className='flex items-center gap-4'>
                    <button className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300'>
                    <i class="ri-send-plane-line"></i>Let's Talk
                    </button>

                    <span className='text-xl text-smallTextColor md:hidden cursor-pointer'>
                    <i class="ri-menu-line"></i>
                    </span>
                    </div>
                    {/*Menu right end*/}
                </div>
            </div>
        </header>
    )
}

export default Header
