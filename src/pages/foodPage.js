import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HistoryPage() {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/histories');
      setFoodData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Render historyData here */}
    </div>
  );
}

export default HistoryPage;