import React from 'react';
import Banner from './Banner';
import BecomePatient from './BecomePatient';
import DrugsAndVitas from './DrugsAndVitas';
import Offers from './Offers';

const Home = () => {
    return (
        <>
            <Banner />
            <BecomePatient />
            <Offers />
            <DrugsAndVitas />
        </>
    );
};

export default Home;