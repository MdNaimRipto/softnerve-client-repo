import React from 'react';

const offers = [
    {
        "id": 1,
        "img": "https://i.ibb.co/4MqPXdQ/offer1.webp"
    },
    {
        "id": 2,
        "img": "https://i.ibb.co/w6JsDkk/offer2.webp"
    },
    {
        "id": 3,
        "img": "https://i.ibb.co/52Ltxxc/offer3.webp"
    }
]

const Offers = () => {
    return (
        <div className='container mx-auto px-4 lg:px-16 my-16'>
            <h2 className='text-4xl font-semibold text-[#333] mb-6'>Attractive Offers</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg: lg:grid-cols-3 gap-5'>
                {
                    offers.map(offer => (
                        <div key={offer.id} className='cursor-pointer rounded-md overflow-hidden'>
                            <img src={offer.img} alt="" className='w-full h-full' />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Offers;