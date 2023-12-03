import React, { useContext } from 'react';
import { Flex, P } from '@/components/basic';
import { Icon } from '@/components/custom';

import {
  Actived,
  AvatarContainer,
  BackAvatarContainer,
  Breadcrumb,
  BreadcrumbContainer,
  BreadcrumbWrapper,
  CustomButton,
  CustomLetter,
  FormContainer,
  HeroContainer,
  InfoBar,
  LinkLetter,
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
import ContainerComponent from '@/components/layout/container';
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
                <CustomLetter>Faker</CustomLetter>
                <Flex
                  $style={{
                    vAlign: 'center',
                    gap: '2rem',
                  }}
                >
                  <LinkLetter>View Comprassion (2)</LinkLetter>
                  <CustomButton>
                    <div>Add to Comprassion</div>
                  </CustomButton>
                </Flex>
              </Flex>
              <InfoBar>
                <P $style={{ size: '18px' }}>FAKER (MID)</P>
                <P $style={{ size: '18px' }}>Top 20 (#5)</P>
                <P $style={{ size: '18px' }}>27 years</P>
              </InfoBar>
              <VerticalBarChartLayout>
                <VerticalBarChart />
              </VerticalBarChartLayout>
            </FormContainer>
          </UserInfo>
        </UserInfoContainer>
      </ContainerComponent>
    </HeroContainer>
  );
};

export default Hero;
