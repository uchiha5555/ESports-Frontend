import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { HomeContainer } from './style';

import Hero from './hero';
import Explore from './explore';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  useEffect(() => {}, []);
  return (
    <HomeContainer>
      <Hero />
      <Explore />
    </HomeContainer>
  );
};

export default HomePage;
