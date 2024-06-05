import React, { useEffect, useState } from 'react';
import axios from 'axios';

function infoPage() {
  const [infoData, setInfoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/histories');
      setInfoData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Render historyData here */}
    </div>
  );
}

export default infoPage;