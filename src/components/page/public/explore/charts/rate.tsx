import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  LabelList,
  ReferenceLine,
} from 'recharts';

const data = [
  {
    name: '02.14',
    value: 8,
    color: '#7B99FF',
    title: 'UTA',
  },
  {
    name: '02.16',
    value: 27,
    color: '#426CFF',
    title: 'CHI',
  },
  {
    name: '02.26',
    value: 18,
    color: '#557BFF',
    title: 'BOB',
  },
  {
    name: '03.01',
    value: 10,
    color: '#7B99FF',
    title: 'ORL',
  },
  {
    name: '03.03',
    value: 14,
    color: '#6889FF',
    title: 'DAL',
  },
  {
    name: '03.05',
    value: 27,
    color: '#426CFF',
    title: 'SAS',
  },
  {
    name: '03.07',
    value: 8,
    color: '#7B99FF',
    title: 'CHI',
  },
  {
    name: '03.07',
    value: 15,
    color: '#6889FF',
    title: 'PHI',
  },
  {
    name: '03.10',
    value: 18,
    color: '#557BFF',
    title: 'HOU',
  },
  {
    name: '03.12',
    value: 18,
    color: '#557BFF',
    title: 'DET',
  },
];

const RateChart = () => {
  const CustomizedLabel = (props: any) => {
    const { x, y, height, value, index } = props;
    return (
      <>
        <text x={x} y={30 + y} dx={53} fill="White" fontSize={18} textAnchor="end">
          {data[index].value}
        </text>
        <text
          x={x}
          y={y + height - 20}
          dx={60}
          fill="white"
          fontSize={18}
          textAnchor="end"
        >
          {data[index].title}
        </text>
      </>
    );
  };

  return (
    <BarChart
      width={1200}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid vertical={false} />
      <Bar dataKey="value">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
        <LabelList content={<CustomizedLabel />} />
      </Bar>
      <ReferenceLine
        y={20}
        stroke="white" // Color of the reference line
        strokeWidth={2} // Width of the reference line
        label={{
          position: 'insideBottom', // Position of the label
          value: ``, // Label text
          fontSize: 40, // Font size of the label
          fill: 'black', // Color of the label text
          dy: 40,
        }}
      />
    </BarChart>
  );
};

export default RateChart;
