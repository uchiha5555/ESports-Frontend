import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    subject: 'Rating',
    A: 120,
    fullMark: 150,
  },
  {
    subject: 'KAST',
    A: 98,
    fullMark: 150,
  },
  {
    subject: 'Kills',
    A: 86,
    fullMark: 150,
  },
  {
    subject: 'Deaths',
    A: 99,
    fullMark: 150,
  },
  {
    subject: 'Assists',
    A: 85,
    fullMark: 150,
  },
  {
    subject: 'ADR',
    A: 150,
    fullMark: 150,
  },
  {
    subject: 'Headshots',
    A: 70,
    fullMark: 150,
  },
];

const StatsChart = () => {
  return (
    <ResponsiveContainer>
      <RadarChart width={250} height={250} data={data} margin={{ left: 70 }}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <Radar name="Mike" dataKey="A" stroke="#426CFF" fill="#426CFF" />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default StatsChart;
