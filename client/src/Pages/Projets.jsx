import React, { useEffect } from 'react';
import Navbar from '../layouts/Navbar';
import Slider from '../components/Slider';
import SliderProject from '../components/SliderProject';
import Footer from '../layouts/Footer';


const Projets = () => {
    
    return (
        <main className='projets'>
        
       
            <Navbar/>
            <Slider/>
            <SliderProject/>
            <Footer />

        </main>
    );
}

export default Projets;
