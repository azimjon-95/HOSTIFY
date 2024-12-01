import React from 'react';
import './style.css';
import Banner from '../../components/banner/Banner';
import { PricingTable } from '../../components/PricingTable/PricingTable';
import ServerPlans from '../../components/serverPlans/ServerPlans';
import SignUp from '../../components/SignUp/SignUp';
import CloudGpu from '../../components/cloudGpu/CloudGpu';

const Home = () => {
    return (
        <div className="home_container">
            <div id="banner">
                <Banner />
            </div>
            <div id="pricing-table">
                <PricingTable />
            </div>

            <div id="cloud-gpu">
                <CloudGpu />
            </div>

            <div id="server-plans">
                <ServerPlans />
            </div>
            <div id="sign-up">
                <SignUp />
            </div>
        </div>
    )
}

export default Home;