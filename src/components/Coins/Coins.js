import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';
import Spinner from '../Spinner/Spinner';

const Coins = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => res.json())
            .then(data => setCoins(data))
        setLoading(false)
    }, []);
    
    return (
        <>
            {
                loading ? <Spinner /> : (
                    <div className='min-h-[70vh]'>
                        <div className='text-center mt-[100px]'>
                            <h2 className='font-bold text-4xl mt-10 text-gray-700'>Available Crypto Currencies</h2>
                            <p className='text-xl mt-2 text-gray-800 font-semibold'>Total Coins: {coins.length}</p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-6 mx-12 my-10'>
                            {
                                coins.map(coin => <CoinCard key={coin.id} coin={coin}></CoinCard>)
                            }
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Coins;