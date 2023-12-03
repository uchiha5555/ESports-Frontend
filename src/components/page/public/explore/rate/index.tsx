import React, { useContext } from 'react';
import {
  CustomButton,
  CustomFont,
  THeader,
  HitRatesContainer,
  Title,
  TBody,
  ChartContainer,
} from './style';
import { Flex, P } from '@/components/basic';
import { Icon } from '@/components/custom';
import RateChart from '../charts/rate';
import { ModeContext } from '@/context';

const HitRates = () => {
  const { mode } = useContext(ModeContext);
  return (
    <HitRatesContainer>
      <Flex
        $style={{
          hAlign: 'space-between',
          w: '100%',
          queries: {
            768: {
              fDirection: 'column',
              gap: '1rem',
              w: '100%',
            },
          },
        }}
      >
        <Flex
          $style={{
            fDirection: 'column',
            gap: '0.25rem',
          }}
        >
          <Title>Hit Rate</Title>
          <P $style={{ color: mode ? 'white' : 'black' }}>FAKER (T1)</P>
        </Flex>
        <CustomButton>
          <P>Average</P>
          <Icon icon="Plus" color={mode ? '#545454' : '#ffffff'} />
        </CustomButton>
      </Flex>
      <Flex
        $style={{
          gap: '2rem',
          queries: {
            768: {
              fDirection: 'column',
            },
          },
        }}
      >
        <Flex
          $style={{
            fDirection: 'column',
            w: '100%',
            maxW: '450px',
          }}
        >
          <THeader>
            <CustomFont>Line</CustomFont>
            <CustomFont>Over</CustomFont>
            <CustomFont>Under</CustomFont>
          </THeader>
          <TBody>
            <CustomFont>18.5</CustomFont>
            <CustomFont>120</CustomFont>
            <CustomFont>-110</CustomFont>
          </TBody>
        </Flex>
        <Flex
          $style={{
            flex: '1',
            fDirection: 'column',
            w: '100%',
          }}
        >
          <THeader>
            <CustomFont>Full</CustomFont>
            <CustomFont>L10</CustomFont>
            <CustomFont>L5</CustomFont>
            <CustomFont>V Gen.G</CustomFont>
          </THeader>
          <TBody>
            <CustomFont>17.3</CustomFont>
            <CustomFont>15.7</CustomFont>
            <CustomFont>17</CustomFont>
            <CustomFont>11.5</CustomFont>
          </TBody>
        </Flex>
      </Flex>
      <ChartContainer>
        <RateChart />
      </ChartContainer>
    </HitRatesContainer>
  );
};

export default HitRates;
