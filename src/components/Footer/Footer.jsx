import React from 'react'

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='pt-12 bg-slate-950'>
      {/*footer top */}
      <div className='container'>
        <div className='sm:flex items-center justify-between md:gap-8'>
          <div className='w-full sm:w-1/2'>
            <h2 className='text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]'>
              Do you want to make beautiful products?
            </h2>
            <a href='#contact'>
              <button className='text-white bg-primaryColor font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                <i class="ri-mail-line"></i>Hire Me
              </button>
            </a>
          </div>

          <div className='w-full sm:w-1/2'>
            <p className='mt-4 text-gray-300 leading-7 sm:mt-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit.</p>

            <div className='flex items-center gap-4 flex-wrap md:gap-8 mt-10'>
              <span className='text-gray-300 font-[600] text-[15px]'>Follow Me:</span>
              <span>
                <a href='#linkedin' className=' font-[600] text-[18px] text-gray-300'
                ><i class="ri-linkedin-box-fill"></i></a>
              </span>
              <span>
                <a href='#github' className=' font-[600] text-[18px] text-gray-300'
                ><i class="ri-github-fill"></i></a>
              </span>
              <span>
                <a href='#medium' className=' font-[600] text-[18px] text-gray-300'
                ><i class="ri-medium-fill"></i></a>
              </span>
            </div>
          </div>
        </div>
        {/*Menu start*/}
        <div>
          <ul className='flex items-center justify-center gap-10 mt-10'>
            <li><a className=' text-gray-400 font-[600] ' href='#about'>About</a></li>
            <li><a className=' text-gray-400 font-[600]' href='#services'>Services</a></li>
            <li><a className=' text-gray-400 font-[600]' href='#portfolio'>Portfolio</a></li>
            <li><a className=' text-gray-400 font-[600]' href='#contact'>Contact</a></li>
          </ul>
        </div>
        {/*Menu end*/}
      </div>
      {/*footer top end*/}
      <div>
        <p className='text-[12px] text-gray-200'>
        Copyright {year} developed by Supuni - All right reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer