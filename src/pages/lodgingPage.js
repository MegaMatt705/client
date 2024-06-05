import React, { useEffect, useState } from 'react';
import axios from 'axios';

function lodgingPage() {
  const [lodgingData, setLodgingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/histories');
      setLodgingData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Render historyData here */}
    </div>
  );
}

export default lodgingPage;