import React, { useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchStockPrice } from '../api/stockAPI';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js'; //new added

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend ); //new added
const StockChart = ({ symbol }) => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [{ data: [] }] });
  const chartRef = useRef();

  const updateChartData = (priceData) => {
    setChartData((prevData) => ({
      labels: [...prevData.labels, new Date().toLocaleTimeString()],
      datasets: [
        {
          label: 'Stock Price',
          data: [...prevData.datasets[0].data, priceData],
          borderColor: 'rgba(75,192,192,1)',
          fill: false,
        },
      ],
    }));
  };

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const data = await fetchStockPrice(symbol);
      if (data) {
        updateChartData(data.price); // Assuming `data.price` contains the latest price
      }
    }, 5000); // Fetch data every 5 seconds

    // Clean up the interval on unmount
    return () => clearInterval(intervalId);
  }, [symbol]);

  // Destroy the chart instance on unmount to avoid reusing the same canvas
  useEffect(() => {
    return () => {
        // eslint-disable-next-line
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <h2>{symbol} Stock Price</h2>
      <Line ref={chartRef} data={chartData} />
    </div>
  );
};

export default StockChart;
