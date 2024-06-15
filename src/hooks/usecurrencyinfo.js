import { useEffect, useState } from 'react';

const useCurrencyInfo = (from) => {
  const [currencyInfo, setCurrencyInfo] = useState({});

  useEffect(() => {
    // Replace with your actual data fetching logic
    fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
      .then((response) => response.json())
      .then((data) => setCurrencyInfo(data.rates))
      .catch((error) => console.error('Error fetching data:', error));
  }, [from]);

  return currencyInfo;
};

export default useCurrencyInfo;
