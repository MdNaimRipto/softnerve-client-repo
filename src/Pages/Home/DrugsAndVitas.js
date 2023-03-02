import React, { useEffect, useState } from 'react';

const DrugsAndVitas = () => {
    const [options, setOptions] = useState([])
    useEffect(() => {
        fetch('drugsAndVitas.json')
            .then(res => res.json())
            .then(data => setOptions(data))
    }, [])
    return (
        <div className='container mx-auto px-4 lg:px-16 my-16'>
            <h2 className='text-4xl font-semibold text-[#333] mb-6'>Drugs & Vitamins</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg: lg:grid-cols-3 gap-5'>
                {
                    options.map(o => (
                        <div key={o.id} className='h-24 rounded px-4 border border-gray-300 flex items-center cursor-pointer'>
                            <div className='w-8 h-8 mr-3'>
                                <img src={o.img} alt="" />
                            </div>
                            <p>{o.title}</p>
                        </div>
                    ))
                }
                <div className='h-24 rounded mx-auto w-full border border-gray-300 flex items-center cursor-pointer'>
                    <p className='text-center font-semibold w-full text-[#e0004d] text-lg'>See All</p>
                </div>
            </div>
        </div >
    );
};

export default DrugsAndVitas;