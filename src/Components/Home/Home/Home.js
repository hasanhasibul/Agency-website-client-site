import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import Headers from '../Headers/Headers';
import Professonal from '../Professonal/Professonal';
import Services from '../Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <Services></Services>
            <Professonal></Professonal>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;