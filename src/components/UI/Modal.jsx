import React from "react";
import portfolios from "../../assets/data/portfolioData";

const Modal = ({ activeID, setShowModal }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeID);

  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40 flex items-center justify-center p-4">
      <div className="w-full max-w-[450px] bg-white rounded-[8px] relative overflow-y-auto max-h-[85vh] p-4">
        <button
          className="w-[1.5rem] h-[1.5rem] bg-white absolute top-[1rem] right-[1rem] text-[20px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer shadow"
          onClick={() => setShowModal(false)}
        >
          &times;
        </button>

        <div>
          <figure>
            <img
              className="rounded-[8px] w-full max-h-[200px] object-contain mb-3"
              src={portfolio.imgUrl}
              alt=""
            />
          </figure>
        </div>

        <div>
          <h2 className="text-xl text-headingColor font-[700] my-4">
            {portfolio.title}
          </h2>
          <p className="text-[14px] leading-6 text-smallTextColor">
            {portfolio.description}
          </p>

          <div className="mt-4 flex items-center gap-2 flex-wrap">
            <h4 className="text-[16px] text-headingColor font-[700]">
              Technologies:
            </h4>
            {portfolio.technologies.map((item, index) => (
              <span
                key={index}
                className="py-1 px-2 bg-gray-200 rounded-[5px] text-[13px] leading-0"
              >
                {item}
              </span>
            ))}
          </div>

          <a
            href={portfolio.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="py-2 px-4 bg-primaryColor text-white my-6 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300 w-full">
              Github Repository
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
