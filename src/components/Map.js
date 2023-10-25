import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const MAPBOX_STYLE_URL = process.env.REACT_APP_MAPBOX_STYLE_URL;
const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const Map = () => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100vh',
    latitude: 43.272719,
    longitude: 6.640523,
    zoom: 8,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
      mapStyle={MAPBOX_STYLE_URL}
      onViewportChange={(newViewport) => setViewport(newViewport)}
    />
  );
};

export default Map;
