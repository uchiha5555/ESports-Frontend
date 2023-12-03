import React from 'react';
import { ChartContainer, CustomFont, StatsContainer, Title } from './style';
import { Flex, P } from '@/components/basic';
import { Icon } from '@/components/custom';
import StatsChart from '../charts/stats';
import Table, { TableFieldInterface } from '@/components/custom/table';

const sources: any = [
  {
    name: 'Rating',
    total: '1.32',
    latest: '1.33',
    icon: '',
  },
  {
    name: 'KAST',
    total: '75.54%',
    latest: '73.2%',
    icon: '',
  },
  {
    name: 'Kills',
    total: '21.71',
    latest: '26.2',
    icon: '',
  },
  {
    name: 'Deaths',
    total: '15.85',
    latest: '18.6',
    icon: '',
  },
  {
    name: 'Assists',
    total: '4.78',
    latest: '6.2',
    icon: '',
  },
  {
    name: 'K/D Diff',
    total: '5.85',
    latest: '7.6',
    icon: '',
  },
  {
    name: 'ADR',
    total: '85.27',
    latest: '84.58',
    icon: '',
  },
];

const fields: TableFieldInterface[] = [
  {
    key: 'name',
    label: '',
    render: (i, v, n) => <CustomFont>{v}</CustomFont>,
    sort: (i: any, v: any) => v,
    description: 'This field is ...',
    width: '90px',
  },
  {
    key: 'total',
    label: 'Total',
    render: (i, v) => <CustomFont>{v}</CustomFont>,
    sort: (i: any, v: any) => v,
    description: 'This field is ...',
    width: '80px',
  },
  {
    key: 'icon',
    label: '',
    render: (i, v) => <Icon icon="Line" />,
    sort: (i: any, v: any) => v,
    description: 'This field is ...',
    width: '40px',
  },
  {
    key: 'latest',
    label: 'Latest',
    render: (i, v) => <CustomFont>{v}</CustomFont>,
    sort: (i: any, v: any) => v,
    description: 'This field is ...',
    width: '80px',
  },
];

const Stats = () => {
  return (
    <StatsContainer>
      <Flex
        $style={{
          fDirection: 'column',
        }}
      >
        <Flex
          $style={{
            fDirection: 'column',
            gap: '0.25rem',
          }}
        >
          <Title>
            Stats
            <sup>
              <Icon icon="Help" />
            </sup>
          </Title>
          <P>FAKER</P>
        </Flex>
        <ChartContainer>
          <StatsChart />
        </ChartContainer>
        <Table data={sources} fields={fields} />
      </Flex>
    </StatsContainer>
  );
};

export default Stats;