import React from 'react'
import AfterHeroSection from '../Components/AfterHeroSection'
import HeroSection from '../Components/HeroSection';
import Courses from '../Components/Courses';
import Projects from '../Components/Projects';
import BubblesBackground from '../Components/BubblesBackground.jsx';

const Home = () => {
    return (
        <div className='relative bg-transparent'>
            <BubblesBackground />
            <HeroSection />
            <AfterHeroSection />
            <Courses />
            <Projects />
        </div>

    )
};

export default Home
