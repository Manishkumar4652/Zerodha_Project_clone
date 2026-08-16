import React from 'react';
import Hero from './Hero';
import Award from './Award';
import Stats from './Stats';
import Education from './Education';
import OpenAccount from '../OpenAccont';
import Kite from './Kite';
import Pricing from './Pricing';

function HomePage() {
    return ( 
        <>
            <Hero />
            <Award />
            <Stats />
            <Kite />
            <Pricing />
            <Education />
            <OpenAccount />
        </>
     );
}

export default HomePage;