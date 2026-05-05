import React from 'react';
import Hero from '../components/home/Hero';
import Carousel from '../components/home/Carousel';
import AboutPreview from '../components/home/AboutPreview';
import ProgramsPreview from '../components/home/ProgramsPreview';
import NextMatch from '../components/home/NextMatch';
import ScheduleHonours from '../components/home/ScheduleHonours';
import Partners from '../components/home/Partners';
import Newsletter from '../components/home/Newsletter';

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