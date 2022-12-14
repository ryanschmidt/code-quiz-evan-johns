import React from 'react';

const Card = ({h1text, h2text, p1, p2, q, a, imageURL}) => (
  <div className="relative h-96 w-72">
    <img src={imageURL}
      className="object-cover h-full w-full" />
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 hover:opacity-100 bg-opacity-0 hover:bg-opacity-90 bg-blue-gray">
      <div className="flex flex-col px-10 justify-center text-center">
        <h1 className="text-white font-normal opacity-90 tracking-wider mb-3">{h1text}</h1>
        <h2 className="text-dark-gray opacity-90 text-sm tracking-widest mb-4">{h2text}</h2>
        <div className='flex flex-row justify-center text-center tracking-tight text-xs'>
            <span className='text-dark-gray opacity-90 font-semibold pr-1'>{q}</span>
            <p className="text-white mb-4 opacity-90 tracking-tight">{p1}</p>
        </div>
        <div className='flex flex-row justify-center text-center tracking-tight text-xs'>
            <span className='text-dark-gray opacity-90 font-semibold'>{a}</span>
            <p className="text-white mb-4 opacity-90 tracking-tight">{p2}</p>
        </div> 
      </div>
    </div>
  </div>
);

export default Card;
