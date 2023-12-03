import { ModeContext } from '@/context';
import React, { useContext } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ReferenceLine,
  Cell,
  LabelList,
  ResponsiveContainer,
  Line,
  Rectangle,
} from 'recharts';

const data = [
  {
    name: 'Rating 2.0',
    value: 1.19,
    color: '#426CFF',
  },
  {
    name: 'DPR',
    value: 1.1,
    color: '#EEEEEE',
  },
  {
    name: 'KAST',
    value: 1.26,
    color: '#426CFF',
  },
  {
    name: 'Impact',
    value: 1.02,
    color: '#EEEEEE',
  },
  {
    name: 'ADR',
    value: 1.1,
    color: '#426CFF',
  },
  {
    name: 'KPR',
    value: 0.85,
    color: '#EEEEEE',
  },
];

const MobileVerticalBarChart = () => {
  const { mode } = useContext(ModeContext);

  const CustomizedLabel = (props: any) => {
    const { x, y, width, index } = props;
    return (
      <text
        x={x + 10}
        y={y}
        dy={16}
        fill={index % 2 === 0 ? 'white' : 'black'}
        fontSize={14}
        textAnchor="start"
      >
        {data[index].name + ' ' + data[index].value}
      </text>
    );
  };

  return (
    <ResponsiveContainer width={'100%'} height={'100%'}>
      <BarChart data={data} layout="vertical">
        <XAxis
          type="number"
          axisLine={false} // Hide axis line
          tick={false} // Hide ticks
          tickLine={false} // Hide tick lines
          interval={0} // Ensure all labels are hidden
        />
        <YAxis
          dataKey="name"
          type="category"
          axisLine={false} // Hide axis line
          tickLine={false} // Hide tick lines
          tick={false} // Custom function to render ticks
        />

        <Bar dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
          <LabelList content={<CustomizedLabel />} />
        </Bar>
        <ReferenceLine
          x={1}
          stroke={mode ? 'white' : 'black'} // Color of the reference line
          strokeWidth={3} // Width of the reference line
          label={{
            position: 'insideBottom', // Position of the label
            value: `Okay`, // Label text
            fontSize: 18, // Font size of the label
            fill: mode ? 'white' : 'black', // Color of the label text
            dy: 25,
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MobileVerticalBarChart;
