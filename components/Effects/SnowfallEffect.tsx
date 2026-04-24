import React from 'react';
import Snowfall from 'react-snowfall';

const SnowfallEffect: React.FC = () => (
  <Snowfall
    style={{
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      zIndex: 999,
      pointerEvents: 'none',
      top: 0,
      left: 0,
      color: 'white',
    }}
    snowflakeCount={80}
  />
);

export default SnowfallEffect;