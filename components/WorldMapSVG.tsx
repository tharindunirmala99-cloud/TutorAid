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
  <div
    className="relative w-screen mx-auto h-auto"
    style={{
      backgroundImage: `
        radial-gradient(circle, #d1d5db 1.5px, transparent 1.5px),
        radial-gradient(circle, #d1d5db 1.5px, transparent 1.5px)
      `,
      backgroundSize: '24px 24px',
      backgroundPosition: '0 0, 12px 12px',
      overflowX: 'hidden',
    }}
  >
    <WorldMap style={{ display: 'block' }} className="w-full h-full" />
    {pinData.map((pin) => (
      <span
        key={pin.country}
        title={pin.country}
        style={{
          position: 'absolute',
          left: pin.left,
          top: pin.top,
          transform: 'translate(-50%, -100%)',
          pointerEvents: 'auto',
          width: '2.5rem',
          height: '2.5rem',
          background: 'white',
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid #eee',
        }}
      >
        <img
          src={pin.flagUrl}
          alt={pin.country + ' flag'}
          style={{
            width: '1.5rem',
            height: '1.5rem',
            borderRadius: '50%',
            display: 'block',
          }}
        />
      </span>
    ))}
  </div>
);

export default WorldMapSVG;