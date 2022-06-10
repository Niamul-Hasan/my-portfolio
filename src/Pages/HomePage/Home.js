import React from 'react';
import './Home.css';
import ContactForm from './Form/ContactForm';
import Banner from './Form/Banner/Banner';
import Service from './Service/Service';
import Projects from './Projects/Projects';
import Footer from '../Shared/Footer';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Projects></Projects>
            <ContactForm></ContactForm>
            <Footer></Footer>



        </div>
    );
};

export default Home;