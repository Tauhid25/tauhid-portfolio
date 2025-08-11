import React from 'react';
import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import ContactMe from '../components/ContactMe';
import MySkill from '../components/MySkill';
import MyProjects from '../components/MyProjects';
import MyExperience from '../components/MyExperience';
import MyEducation from '../components/MyEducation';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MySkill></MySkill>
            <MyProjects></MyProjects>
            <MyExperience></MyExperience>
            <MyEducation></MyEducation>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;