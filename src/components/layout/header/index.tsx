import React, { FC, useEffect, useState } from 'react';
import {
  HeaderContainer,
  HeaderWrapper,
  MenuItem,
  RadioContainer,
  SearchContainer,
} from './style';
import useScroll from '@/hooks/useScroll';
import { Flex, Logo, P } from '@/components/basic';
import { Icon, Input, RadioButton } from '@/components/custom';
import Switch from '@/components/custom/switch';
import ContainerComponent from '../container';

interface HeaderType {
  toggle?: boolean;
  toggleTheme: (value: any) => void;
}

const Header: FC<HeaderType> = ({ toggle, toggleTheme }) => {
  const [, scrollY] = useScroll();
  const [search, setSearch] = useState('');

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
              <Flex
                $style={{
                  gap: '2rem',
                  p: '0.25rem 0 0',
                }}
              >
                <MenuItem>Matches</MenuItem>
                <MenuItem>Teams</MenuItem>
                <MenuItem>Players</MenuItem>
                <MenuItem>Comparison</MenuItem>
                <MenuItem>Tutorials</MenuItem>
                <MenuItem>Props</MenuItem>
                <MenuItem>Support</MenuItem>
              </Flex>
            </Flex>
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
                    toggled={toggle}
                    onChange={e => toggleTheme(!toggle)}
                  />
                  <P>Light</P>
                </RadioContainer>
              </Flex>
              <MenuItem>Faker+</MenuItem>
            </SearchContainer>
          </Flex>
        </HeaderWrapper>
      </ContainerComponent>
    </HeaderContainer>
  );
};

export default Header;
