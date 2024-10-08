import React, { useState, useEffect } from 'react';
import data from '../../assets/data/portfolioData';
import Modal from './Modal';

const Portfolio = () => {

  const [nextItems, setNextItems] = useState(6)
  const [portfolios, setPortfolios] = useState(data)
  const [selectTab, setSelectTab] = useState('all')
  const [showModal, setShowModal] = useState(false)
  const [activeID, setActiveID] = useState(null)

  const loadMoreHandler = () => {
    setNextItems(prev => prev + 3)
  }

  const showModalHandler = id => {
    setShowModal(true)
    setActiveID(id)
  }

  useEffect(() => {
    if (selectTab === 'all') {
      setPortfolios(data)
    }

    if (selectTab === 'web') {
      const filteredData = data.filter(item => item.category === 'Web')
      setPortfolios(filteredData)
    }

    if (selectTab === 'mobile') {
      const filteredData = data.filter(item => item.category === 'Mobile')
      setPortfolios(filteredData)
    }

    if (selectTab === 'ds') {
      const filteredData = data.filter(item => item.category === 'Ds')
      setPortfolios(filteredData)
    }

  }, [selectTab])

  return (
    <section id='portfolio'>
      <div className='container'>
        <div className='flex items-center justify-between flex-wrap'>
          <div className='mb-7 sm:mb-0'>
            <h3 className='text-[2rem] text-headingColor font-[700]'>My Top Projects</h3>
          </div>
          <div className='flex gap-3'>
            <button onClick={() => setSelectTab('all')} className='py-2 px-4 text-smallTextColor border border-solid border-smallTextColor rounded-[8px]'>All</button>
            <button onClick={() => setSelectTab('web')} className='py-2 px-4 text-smallTextColor border border-solid border-smallTextColor rounded-[8px]'>Web</button>
            <button onClick={() => setSelectTab('mobile')} className='py-2 px-4 text-smallTextColor border border-solid border-smallTextColor rounded-[8px]'>Mobile</button>
            <button onClick={() => setSelectTab('ds')} className='py-2 px-4 text-smallTextColor border border-solid border-smallTextColor rounded-[8px]'>Data Science</button>
          </div>
        </div>

        <div className='flex items-center gap-4 flex-wrap'>
          {portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
            <div data-aos='fade-zoom-in' data-aos-duration='1000' data-aos-delay='50' key={index} className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'>
              <figure>
                <img src={portfolio.imgUrl} alt='' className='rounded-[8px]' />
              </figure>
              <div className='w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block'>
                <div className='w-full h-full flex items-center justify-center'>
                  <button 
                  onClick={()=>showModalHandler(portfolio.id)} 
                  className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>
                  See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-6 text-center'>

          {
            nextItems < portfolios.length && data.length > 6 && (
              <button onClick={loadMoreHandler} className='text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>Load More</button>
            )
          }

        </div>
      </div>

      {
        showModal && <Modal setShowModal={setShowModal} activeID={activeID} />
      }
    </section>
  );
}

export default Portfolio;
