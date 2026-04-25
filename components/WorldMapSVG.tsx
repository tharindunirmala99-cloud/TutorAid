import React from 'react';
import WorldMap from '/assets/world.svg?react';

const pinData = [
  {
    country: 'Sri Lanka',
    flagUrl: 'https://kapowaz.github.io/circle-flags/flags/lk.svg',
    left: '70%',
    top: '58%',
  },
  {
    country: 'United Kingdom',
    flagUrl: 'https://kapowaz.github.io/circle-flags/flags/gb.svg',
    left: '47%',
    top: '23%',
  },
  {
    country: 'United Arab Emirates',
    flagUrl: 'https://kapowaz.github.io/circle-flags/flags/ae.svg',
    left: '54%',
    top: '39%',
  },
];

const WorldMapSVG: React.FC = () => (
  <div className="world-map-container">
    <WorldMap className="world-map-svg" />
    {pinData.map((pin) => (
      <span
        key={pin.country}
        title={pin.country}
        className="world-map-pin"
        style={{ left: pin.left, top: pin.top }}
      >
        <img src={pin.flagUrl} alt={pin.country + ' flag'} />
      </span>
    ))}
  </div>
);

export default WorldMapSVG;