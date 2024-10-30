import React, { useEffect, useState } from 'react';

const Prediction = ({ latestPrice }) => {
  const [predictedPrice, setPredictedPrice] = useState(null);

  useEffect(() => {
    if (latestPrice) {
      const mockPrediction = latestPrice * (1 + Math.random() * 0.02 - 0.01); // Random small fluctuation
      setPredictedPrice(mockPrediction.toFixed(2));
    }
  }, [latestPrice]);

  return (
    <div>
      <h3>Predicted Next Price: ${predictedPrice}</h3>
    </div>
  );
};

export default Prediction;
