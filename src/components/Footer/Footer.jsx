import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='pt-12 bg-slate-950'>
      {/* footer top */}
      <div className='container mx-auto text-center'>
        <div className='flex justify-center'>
          <div className='w-full sm:w-1/2'>
            <div className='flex justify-center items-center gap-4 flex-wrap md:gap-8 mt-10 mb-10'>
              <span className='text-gray-300 font-[600] text-[20px]'>Follow Me:</span>
              <span>
                <a href='https://www.linkedin.com/in/supuni-bandara-4656a524a/' className='font-[600] text-[20px] text-gray-300'>
                  <i className='ri-linkedin-box-fill'></i>
                </a>
              </span>
              <span>
                <a href='https://github.com/supuni97' className='font-[600] text-[20px] text-gray-300'>
                  <i className='ri-github-fill'></i>
                </a>
              </span>
              <span>
                <a href='https://medium.com/@sitharabandara' className='font-[600] text-[20px] text-gray-300'>
                  <i className='ri-medium-fill'></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* footer top end */}
      <div className='text-center'>
        <p className='text-[12px] text-gray-200'>
          Copyright {year} developed by Supuni - All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
