import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner'

const CoinDetails = () => {
    const { coinId } = useParams();
    const [loading, setLoading] = useState(false);
    const [coinDetails, setCoinDetails] = useState({})
    useEffect(() => {
        setLoading(true)
        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
            .then(res => res.json())
            .then(data => setCoinDetails(data))
        setLoading(false)
    }, [coinId])
    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
                    <div className='h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 md:justify-items-around content-center'>
                        <div className='order-2 md:order-1'>
                            <h1 className='text-3xl'>General Info:</h1>
                            <hr />
                            <h1>Coin Name: {coinDetails.name}</h1>
                            <h1>Market Cap Rank: {coinDetails.market_cap_rank}</h1>
                            <h1>
                                Origin:{' '}
                                {coinDetails.country_origin ? coinDetails.country_origin : 'Not Available'}
                            </h1>
                            <h1>Contract Address: {coinDetails.contract_address}</h1>
                            <h1>Hashing Algorithm: {coinDetails.hashing_algorithm}</h1>
                            <h1>Genesis Date: {coinDetails.genesis_date}</h1>
                            <h1>Last Updated: {coinDetails.last_updated}</h1>

                            <h1 className='text-3xl mt-4'>Scores:</h1>
                            <hr />
                            <h1>Community Score: {coinDetails.community_score}</h1>
                            <h1>Developer Score: {coinDetails.developer_score}</h1>
                            <h1>Liquidity Score: {coinDetails.liquidity_score}</h1>
                            <h1>Public Interest Score: {coinDetails.public_interest_score}</h1>
                        </div>
                        <div className='flex order-1 md:order-2 justify-center items-center'>
                            <img src={coinDetails.image?.large} alt='coinImg' />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
};

export default CoinDetails;