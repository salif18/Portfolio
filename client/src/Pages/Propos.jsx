import React from 'react';
import Navbar from '../layouts/Navbar';
import Cv from '../components/Cv';
import Footer from '../layouts/Footer';

const Propos = () => {
    return (
        <main className='propos'>
              <Navbar/>
              <Cv/>
              <Footer/>
        </main>
    );
}

export default Propos;
