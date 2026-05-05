import React from 'react';
import Hero from '../components/Home/Hero';
import Carousel from '../components/Home/Carousel';
import AboutPreview from '../components/Home/AboutPreview';
import ProgramsPreview from '../components/Home/ProgramsPreview';
import NextMatch from '../components/Home/NextMatch';
import ScheduleHonours from '../components/Home/ScheduleHonours';
import Partners from '../components/Home/Partners';
import Newsletter from '../components/Home/Newsletter';

const Home = () => {
  console.log('[Home] Full Bayern‑style homepage loaded');
  return (
    <>
      <Hero />
      <Carousel />
      <AboutPreview />
      <ProgramsPreview />
      <NextMatch />
      <ScheduleHonours />
      <Partners />
      <Newsletter />
    </>
  );
};

export default Home;