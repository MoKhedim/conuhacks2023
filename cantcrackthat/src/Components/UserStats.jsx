//React component for the stats page
import React, { Component } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import { Doughnut } from 'react-chartjs-2';
  import { faker } from '@faker-js/faker';
  var zxcvbn = require('zxcvbn')
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );
  
export default function Stats(crackedTime) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Days needed to crack a password by its length',
        font: {
          size: 25
        }
      },
      options: {
        scales: {
          x: [{
            scaleLabel: {
              display: true,
              labelString: 'Password length'
            }
          }],
          y: {
            scaleLabel: {
              display: true,
              labelString: 'Days needed to crack the password'
            }
          }
        }
      },
    },
  };

  const optionsDoughnut = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right'
      },
      title: {
        display: true,
        text: 'Do you use the same password for multiple accounts? in %',
        //make text bigger
        font: {
          size: 25
        }
      },
      aspectRatio: 1
    },
  }

  const labels = ['5', '6', '7', '8', '9', '10','11','12','13'];

  //dataset for the graph
  

  const data = {
    labels,
    datasets: [
      {
        label: 'Upper case letters only',
        data: [0, 0, 0, 0, 0, 1, 5],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
    return (
        <div>
            <Line options={options} data={data}/>
        </div>
    )
}
