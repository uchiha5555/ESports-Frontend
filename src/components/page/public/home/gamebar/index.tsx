import React from 'react';
import { Flex } from '@/components/basic';
import { Icon } from '@/components/custom';

import {
  BrandsBar,
  GameBarContainer,
  GameBarSubTitle,
  GameBarTitle,
  GameBarWrapper,
} from './style';

import LegendBrand from '@/assets/img/games/legend.png';
import Image from '@/components/basic/img';

const GameBarComponent = () => {
  return (
    <GameBarContainer>
      <GameBarWrapper>
        <Flex
          $style={{
            flex: '1',
            fDirection: 'column',
          }}
        >
          <GameBarSubTitle>Currently showing stats for</GameBarSubTitle>
          <GameBarTitle>LEGUE OF LEGEND</GameBarTitle>
        </Flex>
        <BrandsBar>
          <Image src={LegendBrand} alt="" $style={{ w: '54px', h: '54px' }} />
          <Icon icon="CS" width="54px" height="54px" />
          <Icon icon="Dota" width="54px" height="54px" />
          <Icon icon="Fighting" width="54px" height="54px" />
          <Icon icon="Racing" width="54px" height="54px" />
          <Icon icon="CoD" width="54px" height="54px" />
        </BrandsBar>
      </GameBarWrapper>
    </GameBarContainer>
  );
};

export default GameBarComponent;
