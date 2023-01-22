//React component for the stats page
import React, { Component } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  var zxcvbn = require('zxcvbn')
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
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
        text: 'Your password strength visualized',
        font: {
          size: 20
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

  const data = {
    labels: [""],
    datasets: [
      {
        data: [crackedTime.crackedTime],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
    return (
        <div>
            <Bar options={options} data={data}/>
            {console.log(crackedTime.crackedTime)}
            <h1 className='subtitle'>
            The graph visualizes how many hours it 
            would approximately take to crack your password
            </h1>
        </div>
    )
}
