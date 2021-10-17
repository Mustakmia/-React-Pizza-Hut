import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutCompany from '../AboutCompany/AboutCompany';
import Contacts from '../Contacts/Contacts';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Testimonials from '../FeedBacks/Feedbacks';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Products></Products>
            <AboutCompany></AboutCompany>
            <Contacts />
            <Testimonials />
            <Footer></Footer>
        </div>
    );
};

export default Home;