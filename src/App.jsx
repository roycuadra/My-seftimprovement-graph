import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'chart.js/auto';
import './App.css'; // Make sure to import your styles.css file

const LearningGrowthGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Data for the graph
    const data = {
      labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
      datasets: [
        {
          label: 'Learning and Growth', // Updated label
          borderColor: 'rgb(75, 192, 192)',
          data: [5, 45, 25, 10, 15, 45, 50, 70, 100], // Replace with your actual data
          fill: false,
        },
      ],
    };

    // Configuration options
    const options = {
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
        },
        y: {
          min: 0,
          max: 50, // Adjusted max value for better scale
        },
      },
      plugins: {
        legend: {
          display: true,
          position: 'top', // Moved legend to the top for better visibility
        },
      },
    };

    // Get the canvas element
    const ctx = chartRef.current.getContext('2d');

    // Create the line chart
    const myChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options,
    });

    // Clean up the chart on component unmount
    return () => myChart.destroy();
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', margin: 0, backgroundColor: 'black' }}>
      <canvas ref={chartRef} id="learningGrowthGraph" width="400" height="250"></canvas>
    </div>
  );
};

export default LearningGrowthGraph;
