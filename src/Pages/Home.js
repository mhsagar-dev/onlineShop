import React from 'react';
import Banner from '../components/Banner';
import Foods from '../components/Foods';
import Navmenu from '../components/Navmenu';

const Home = () => {
    return (
        <div className=''>
            <Navmenu></Navmenu>
            <Banner></Banner>
            <Foods></Foods>
        </div>
    );
};

export default Home;