import React from 'react';
import './Home.css';
import ContactForm from './Form/ContactForm';
import Banner from './Form/Banner/Banner';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <ContactForm></ContactForm>
            <button class="btn btn-success">Success</button>


        </div>
    );
};

export default Home;