import React from 'react';
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

function MyChart() {
  // サンプルデータを定義
  const data = [
    { name: '1月', value: 400 },
    { name: '2月', value: 300 },
    { name: '3月', value: 600 },
    { name: '4月', value: 200 },
    { name: '5月', value: 500 },
    { name: '6月', value: 350 },
  ];

  // チャートの設定
  const chartConfig = {
    width: 500,
    height: 300,
    margin: { top: 20, right: 30, left: 20, bottom: 5 },
  };

  return (
    <div>
      <BarChart
        width={chartConfig.width}
        height={chartConfig.height}
        data={data}
        margin={chartConfig.margin}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default MyChart;