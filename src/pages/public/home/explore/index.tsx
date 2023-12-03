import React, { useState } from 'react';
import { ExploreContainer, ExploreWrapper } from './style';
import _ROUTERS from '@/constants/route.constant';
import OptionsComponent from '@/components/page/public/explore/options';
import HitRates from '@/components/page/public/explore/rate';
import Stats from '@/components/page/public/explore/stats';
import ContainerComponent from '@/components/layout/container';

const Explore = () => {
  return (
    <ExploreContainer>
      <OptionsComponent />
      <ContainerComponent>
        <ExploreWrapper>
          <HitRates />
          <Stats />
        </ExploreWrapper>
      </ContainerComponent>
    </ExploreContainer>
  );
};

export default Explore;
