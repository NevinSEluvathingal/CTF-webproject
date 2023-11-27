import React, { useState, useEffect } from 'react';


const Leaderboard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchLeaderboardData = async () => {
    try {
      const response = await fetch('result.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const updatedData = await response.json();
      setData(updatedData);
      setError(null);
    } catch (error) {
      console.error('Error fetching leaderboard data:', error);
      setError('Error fetching leaderboard data. Please try again.');
    }
  };

  useEffect(() => {
    const sortDataByPoints = () => {
      setData((prevData) =>
        [...prevData].sort((a, b) => b.points - a.points)
      );
    };

    const loadDataAndSort = async () => {
      await fetchLeaderboardData();
      sortDataByPoints();
    };

    loadDataAndSort(); 

    const interval = setInterval(loadDataAndSort, 5000);

    return () => {
      clearInterval(interval); 
    };
  }, []);

  return (
    <div className='hoi'>
      <h1>Leaderboard</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {data.map((player) => (
            <li key={player.name}>
              {player.name} - {player.points}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Leaderboard;
