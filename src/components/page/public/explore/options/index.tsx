import React, { useState } from 'react';
import {
  CustomButton,
  CustomFont,
  OptionContainer,
  OptionWrapper,
  SelectionBar,
  SelectionItem,
} from './style';
import { Flex, P } from '@/components/basic';
import { Dropdown, Icon } from '@/components/custom';
import { GV } from '@/utils/style.util';
import ContainerComponent from '@/components/layout/container';

const itemList = [
  'KAST',
  'Kills',
  'Deaths',
  'Assist',
  'ADR',
  'Headshots',
  'K/D Diff',
  'First K/D Diff',
];

const games = ['L20', 'L10', 'L5'];

const OptionsComponent = () => {
  const [formTabIndex, setFormTabIndex] = useState(0);
  const [gameTabIndex, setGameTabIndex] = useState(0);
  return (
    <OptionContainer>
      <ContainerComponent>
        <OptionWrapper>
          <Flex
            $style={{
              gap: '2rem',
              w: '100%',
              h: '100%',
            }}
          >
            <Flex
              $style={{
                flex: 1,
                vAlign: 'center',
                gap: '2rem',
                w: '100%',
                h: '100%',
              }}
            >
              <Flex
                $style={{
                  flex: 1,
                  fDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <CustomFont>Recent Form</CustomFont>
                <SelectionBar>
                  <SelectionItem>
                    <P>Rating</P>
                  </SelectionItem>
                  {itemList.map((p, i) => (
                    <SelectionItem
                      isActive={formTabIndex === i}
                      onClick={() => setFormTabIndex(i)}
                    >
                      <P>{p}</P>
                    </SelectionItem>
                  ))}
                </SelectionBar>
              </Flex>
              <Flex
                $style={{
                  fDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <CustomFont>Games</CustomFont>
                <SelectionBar>
                  <SelectionItem>
                    <P>Season</P>
                  </SelectionItem>
                  {games.map((p, i) => (
                    <SelectionItem
                      isActive={gameTabIndex === i}
                      onClick={() => setGameTabIndex(i)}
                    >
                      <P>{p}</P>
                    </SelectionItem>
                  ))}
                </SelectionBar>
              </Flex>
            </Flex>
            <Flex
              $style={{
                vAlign: 'center',
                gap: '1.25rem',
                w: '328px',
                h: '100%',
              }}
            >
              <Flex
                $style={{
                  fDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                <CustomFont>Event Type</CustomFont>
                <CustomButton>
                  <P>Event type</P>
                  <Icon icon="Plus" />
                </CustomButton>
              </Flex>
              <Flex
                $style={{
                  fDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                <CustomFont>Maps</CustomFont>
                <CustomButton>
                  <P>All Maps</P>
                  <Icon icon="Plus" />
                </CustomButton>
              </Flex>
            </Flex>
          </Flex>
        </OptionWrapper>
      </ContainerComponent>
    </OptionContainer>
  );
};

export default OptionsComponent;
