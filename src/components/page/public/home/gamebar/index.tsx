import React from 'react';
import { Flex } from '@/components/basic';
import { Icon } from '@/components/custom';

import {
  BrandsBar,
  GameBarContainer,
  GameBarSubTitle,
  GameBarTitle,
  GameBarWrapper,
  TitleBar,
  SwiperContainer,
  ItemContainer,
} from './style';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import LegendBrand from '@/assets/img/games/legend.png';
import Image from '@/components/basic/img';

const GameBarComponent = () => {
  return (
    <GameBarContainer>
      <GameBarWrapper>
        <TitleBar>
          <GameBarSubTitle>Currently showing stats for</GameBarSubTitle>
          <GameBarTitle>LEGUE OF LEGEND</GameBarTitle>
        </TitleBar>

        <BrandsBar>
          <ItemContainer>
            <Image src={LegendBrand} alt="" $style={{ w: '54px', h: '54px' }} />
            <Icon icon="CS" width="54px" height="54px" />
            <Icon icon="Dota" width="54px" height="54px" />
            <Icon icon="Fighting" width="54px" height="54px" />
            <Icon icon="Racing" width="54px" height="54px" />
            <Icon icon="CoD" width="54px" height="54px" />
          </ItemContainer>
          <SwiperContainer>
            <Swiper slidesPerView={3} spaceBetween={80}>
              <SwiperSlide>
                <Image src={LegendBrand} alt="" $style={{ w: '54px', h: '54px' }} />
              </SwiperSlide>
              <SwiperSlide>
                <Icon icon="CS" width="54px" height="54px" />
              </SwiperSlide>
              <SwiperSlide>
                <Icon icon="Dota" width="54px" height="54px" />
              </SwiperSlide>
              <SwiperSlide>
                <Icon icon="Fighting" width="54px" height="54px" />
              </SwiperSlide>
              <SwiperSlide>
                <Icon icon="Racing" width="54px" height="54px" />
              </SwiperSlide>
              <SwiperSlide>
                <Icon icon="CoD" width="54px" height="54px" />
              </SwiperSlide>
            </Swiper>
          </SwiperContainer>
        </BrandsBar>
      </GameBarWrapper>
    </GameBarContainer>
  );
};

export default GameBarComponent;
