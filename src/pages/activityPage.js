import React, { useEffect, useState } from 'react';
import axios from 'axios';

function activityPage() {
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/histories');
      setActivityData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Render historyData here */}
    </div>
  );
}

export default activityPage;