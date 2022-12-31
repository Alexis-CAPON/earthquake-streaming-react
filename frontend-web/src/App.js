import React, { useEffect, useState } from "react";
import io from 'socket.io-client';

// Creating table that display earthquakes
function App() {
  const [earthquakes, setEarthquakes] = useState([]);

  useEffect(() => {
    const socket = io('http://localhost:9000', {transports: ['websocket', 'polling', 'flashsocket']});

    socket.on("latest_quakes", (data) => {
      setEarthquakes([...earthquakes, JSON.parse(data)]);
    });


    return () => {
      socket.disconnect();
    };
  }, [earthquakes]);

  return (
    <div>
      <h1>Real-time Earthquakes</h1>
      <table>
        <thead>
          <tr>
            <th>Magnitude</th>
            <th>Location (Longitude, Latitude)</th>
          </tr>
        </thead>
        <tbody>
          {earthquakes.map(earthquake => (
            <tr>
              <td>{earthquake.properties.mag}</td>
              <td>{earthquake.coordinates.longitude},{earthquake.coordinates.latitude}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



export default App;
