import React from 'react';
import { Link } from 'react-router-dom';

const CoinCard = ({ coin }) => {
    return (

        <Link className='shadow-lg rounded-2xl w-[250px] bg-white p-4 gap-4 flex justify-between items-center' to={`/coin-details/${coin.id}`}>
            <div className='flex-shrink-0'>
                <img className='mx-auto object-cover rounded-full h-16 w-16 ' src={coin.image} alt="profileimg" />
            </div>
            <div className=' flex flex-col justify-end'>
                <span className='text-gray-600 font-medium'>{coin.name}</span>
                <span className='text-gray-400 text-xs'>{coin.symbol}</span>
            </div>
        </Link>

    );
};

export default CoinCard;