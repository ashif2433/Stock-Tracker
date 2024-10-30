import React, { useState } from 'react';
import StockChart from './StockChart';
import Prediction from './Prediction';

const Dashboard = () => {
  const [latestPrice, setLatestPrice] = useState(null);
  const symbol = "AAPL"; // You can make this dynamic based on user input

  const handlePriceUpdate = (newPrice) => {
    setLatestPrice(newPrice);
  };

  return (
    <div>
      <h1>Real-Time Stock Tracker</h1>
      <StockChart symbol={symbol} onPriceUpdate={handlePriceUpdate} />
      <Prediction latestPrice={latestPrice} />
    </div>
  );
};

export default Dashboard;
