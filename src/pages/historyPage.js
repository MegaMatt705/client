import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HistoryPage() {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/histories');
      setHistoryData(result.data);
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