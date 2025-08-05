import React from 'react'
import AfterHeroSection from '../Components/AfterHeroSection'
import HeroSection from '../Components/HeroSection';
import Courses from '../Components/Courses';
import Projects from '../Components/Projects';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <AfterHeroSection />
            <Courses />
            <Projects />
        </div>

    )
};

export default Home
