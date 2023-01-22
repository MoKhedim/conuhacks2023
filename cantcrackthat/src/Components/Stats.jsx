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
  
export default function Stats() {
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

  const labelsDoughnut = ['Yes', 'No'];

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
      {
        label: 'Upper case letters and numbers',
        data: [0, 0, 0, 0, 1, 5],
        borderColor: 'rgb(99, 255, 132)',
        backgroundColor: 'rgba(99, 255, 132, 0.5)',
      },
      {
        label: 'Upper case letters and lower case letters',
        data: [0, 0, 0, 1, 5],
        borderColor: 'rgb(132, 99, 255)',
        backgroundColor: 'rgba(132, 99, 255, 0.5)',
      },
      {
        label: 'Upper case letters, lower case letters, numbers and special characters',
        data: [0, 0, 1, 5],
        borderColor: 'rgb(0, 0, 255)',
        backgroundColor: 'rgba(0, 0, 255, 0.5)',
      },
    ],
  };

  const dataDoughnut = {
    labels: labelsDoughnut,
    datasets: [
      {
        data: [68,32],
        borderColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.5)',
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.2)',
        ],
        radius:  "70%",
      },
    ],
  };
    return (
        <div>
          <h1 className='title'>General statistics on password security</h1>
          <br/>
          <h1 className='subtitle'>
            Below, you can see how the length needed for a password to be considered
            strong varies depending on the complexity of the password.
          </h1>
          <br/>
            <Line options={options} data={data}/>
            <br/>
            <br/>
            <br/>
            <h1 className='title'>
              Here you can see how a bad behaviour is common in the population.
              The majority of people usually never alternate their passwords between
              different accounts.
            </h1>
            <Doughnut options={optionsDoughnut} data={dataDoughnut}/>
            <footer className="footer">
              <div className="content has-text-centered">
                <p>
                  <strong>CantCrackThat</strong> by <a href="#">The Next Amazon</a>. The source code is licensed by
                  <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.
                </p>
              </div>
            </footer>
        </div>
    )
}
