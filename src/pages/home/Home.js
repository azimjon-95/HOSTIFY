import React from 'react';
import './style.css';
import Banner from '../../components/banner/Banner';
import { PricingTable } from '../../components/PricingTable/PricingTable';

const Home = () => {
    return (
        <div>
            <Banner />
            <PricingTable />
        </div>
    )
}

export default Home