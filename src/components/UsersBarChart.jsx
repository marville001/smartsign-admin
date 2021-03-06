import React from "react";
import { Bar } from "react-chartjs-2";


const UsersBarChart = ({x=0,y=0,z=0, title}) => {
  const data = {
    labels: [`Total Users`, `Active Users`, 'Inactive Users'],
    datasets: [
      {
        label: `# of Users`,
        data: [x,y, z],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return <Bar data={data} options={options} />;
};

export default UsersBarChart;
