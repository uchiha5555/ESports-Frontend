import React, { useContext } from 'react';
import { Flex, P, Span } from '@/components/basic';
import { Icon } from '@/components/custom';

import {
  Actived,
  AvatarContainer,
  BackAvatarContainer,
  Breadcrumb,
  BreadcrumbContainer,
  BreadcrumbWrapper,
  ButtonContainer,
  CustomButton,
  CustomName,
  FormContainer,
  HeroContainer,
  InfoBar,
  LinkLetter,
  MobileBreadcrumb,
  MobileButtonContainer,
  MobileInfoBar,
  MobileInfoItem,
  MobileVerticalBarChartLayout,
  PlayerLetter,
  Unactived,
  UserInfo,
  UserInfoContainer,
  VerticalBarChartLayout,
} from './style';
import _ROUTERS from '@/constants/route.constant';
import Image from '@/components/basic/img';
import AvatarImage from '@/assets/img/avatar.png';
import GameBarComponent from '@/components/page/public/home/gamebar';
import VerticalBarChart from '@/components/page/public/home/chart';
import MobileVerticalBarChart from '@/components/page/public/home/chart/mobile';

import ContainerComponent from '@/components/layout/container';
import { FaArrowLeft } from 'react-icons/fa';
import { ModeContext } from '@/context';

const Hero = () => {
  const { mode } = useContext(ModeContext);
  return (
    <HeroContainer>
      <GameBarComponent />
      <BreadcrumbContainer>
        <BreadcrumbWrapper>
          <Breadcrumb>
            <Unactived>/ LoL Matches / LoL. Teams /</Unactived> <Actived>FAKER</Actived>
          </Breadcrumb>
          <PlayerLetter>PLAYER</PlayerLetter>
        </BreadcrumbWrapper>
        <MobileBreadcrumb>
          <FaArrowLeft />
          <Span>Buddy Hield</Span>
        </MobileBreadcrumb>
      </BreadcrumbContainer>
      <ContainerComponent>
        <UserInfoContainer>
          {mode && (
            <BackAvatarContainer>
              <Image src={AvatarImage} alt="" $style={{ bradius: 'none' }} />
            </BackAvatarContainer>
          )}
          <UserInfo>
            <AvatarContainer>
              <Image src={AvatarImage} alt="" $style={{ bradius: 'none' }} />
            </AvatarContainer>
            <FormContainer>
              <Flex
                $style={{
                  hAlign: 'space-between',
                  vAlign: 'center',
                }}
              >
                <CustomName>Faker</CustomName>
                <ButtonContainer>
                  <LinkLetter>View Comprassion (2)</LinkLetter>
                  <CustomButton>
                    <div>Add to Comprassion</div>
                  </CustomButton>
                </ButtonContainer>
              </Flex>
              <InfoBar>
                <P $style={{ size: '18px' }}>FAKER (MID)</P>
                <P $style={{ size: '18px' }}>Top 20 (#5)</P>
                <P $style={{ size: '18px' }}>27 years</P>
              </InfoBar>
              <MobileInfoBar>
                <MobileInfoItem>Buddy (Awper)</MobileInfoItem>
                <MobileInfoItem>Top 20 (#5)</MobileInfoItem>
                <MobileInfoItem>29 years</MobileInfoItem>
              </MobileInfoBar>
              <VerticalBarChartLayout>
                <VerticalBarChart />
              </VerticalBarChartLayout>
            </FormContainer>
          </UserInfo>
          <MobileVerticalBarChartLayout>
            <MobileVerticalBarChart />
          </MobileVerticalBarChartLayout>
          <MobileButtonContainer>
            <LinkLetter>View Comprassion (2)</LinkLetter>
            <CustomButton>
              <div>Add to Comprassion</div>
            </CustomButton>
          </MobileButtonContainer>
        </UserInfoContainer>
      </ContainerComponent>
    </HeroContainer>
  );
};

export default Hero;
