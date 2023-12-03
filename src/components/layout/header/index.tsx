import React, { FC, useContext, useEffect, useState } from 'react';
import {
  HeaderContainer,
  HeaderWrapper,
  MenuContainer,
  MenuItem,
  MobileHeader,
  RadioContainer,
  SearchContainer,
} from './style';
import useScroll from '@/hooks/useScroll';
import { Flex, Logo, P } from '@/components/basic';
import { Icon, Input } from '@/components/custom';
import Switch from '@/components/custom/switch';
import ContainerComponent from '../container';
import { ModeContext } from '@/context';
import { IoMenuOutline } from 'react-icons/io5';

const Header: FC = () => {
  const [, scrollY] = useScroll();
  const [search, setSearch] = useState('');
  const { mode, toggleMode } = useContext(ModeContext);

  return (
    <HeaderContainer isTop={!(scrollY > 50)}>
      <ContainerComponent>
        <HeaderWrapper>
          <Flex
            $style={{
              hAlign: 'space-between',
              w: '100%',
            }}
          >
            <Flex
              $style={{
                gap: '4rem',
                vAlign: 'center',
              }}
            >
              <Logo />
              <MenuContainer>
                <MenuItem>Matches</MenuItem>
                <MenuItem>Teams</MenuItem>
                <MenuItem>Players</MenuItem>
                <MenuItem>Comparison</MenuItem>
                <MenuItem>Tutorials</MenuItem>
                <MenuItem>Props</MenuItem>
                <MenuItem>Support</MenuItem>
              </MenuContainer>
            </Flex>
            <Flex
              $style={{
                vAlign: 'center',
                gap: '4rem',
              }}
            >
              <SearchContainer>
                <Flex
                  $style={{
                    gap: '2rem',
                    w: '100%',
                  }}
                >
                  <Input
                    value={search}
                    onChange={setSearch}
                    placeholder="Search player, team..."
                    preSide={<Icon icon="Search" />}
                    bg="#303030"
                  />
                  <RadioContainer>
                    <P>Dark</P>
                    <Switch
                      id="test-switch"
                      toggled={mode}
                      onChange={e => toggleMode()}
                    />
                    <P>Light</P>
                  </RadioContainer>
                </Flex>
              </SearchContainer>
              <MenuItem>Faker+</MenuItem>
            </Flex>
          </Flex>
        </HeaderWrapper>
        <MobileHeader>
          <Flex
            $style={{
              vAlign: 'center',
              gap: '0.5rem',
            }}
          >
            <IoMenuOutline size={40} />
            <Logo />
          </Flex>
          <MenuItem>Buddy Hield+</MenuItem>
        </MobileHeader>
      </ContainerComponent>
    </HeaderContainer>
  );
};

export default Header;
