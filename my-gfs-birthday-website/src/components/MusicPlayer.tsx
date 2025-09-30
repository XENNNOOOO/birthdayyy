// src/components/MusicPlayer.tsx
'use client';

import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const playerWrapperStyle: React.CSSProperties = {
  position: 'fixed',
  top: '-1000px',
  left: '-1000px',
};

const getButtonStyle = (isReady: boolean): React.CSSProperties => ({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  border: 'none',
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  fontSize: '24px',
  cursor: isReady ? 'pointer' : 'wait',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  zIndex: 1000,
  opacity: isReady ? 1 : 0.5,
  transition: 'opacity 0.3s ease',
});

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const togglePlay = () => {
    if (isReady) {
      setIsPlaying(!isPlaying);
    }
  };

  const handleReady = () => {
    setIsReady(true);
  };
  
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <div style={playerWrapperStyle}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=H2kTgyg8xEs"
          playing={isPlaying}
          loop={true}
          volume={0.5}
          controls={false}
          width="100%"
          height="100%"
          config={{
            youtube: {
              playsinline: 1, // This is the corrected structure
            },
          }}
          onReady={handleReady}
        />
      </div>

      <button 
        onClick={togglePlay} 
        style={getButtonStyle(isReady)}
        disabled={!isReady}
      >
        {isPlaying ? '⏸️' : '🎵'}
      </button>
    </>
  );
}