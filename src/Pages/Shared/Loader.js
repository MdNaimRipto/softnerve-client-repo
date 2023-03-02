import React from 'react';
import { BounceLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <BounceLoader color="#e0004d" />
        </div>
    );
};

export default Loader;