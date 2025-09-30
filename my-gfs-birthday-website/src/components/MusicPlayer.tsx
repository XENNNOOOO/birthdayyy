// src/components/MusicPlayer.tsx
'use client';

import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const playerWrapperStyle: React.CSSProperties = {
  position: 'fixed',
  top: '-1000px',
  left: '-1000px',
};

// We'll pass the 'isReady' state to the button style
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
  cursor: isReady ? 'pointer' : 'wait', // Change cursor when not ready
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  zIndex: 1000,
  opacity: isReady ? 1 : 0.5, // Make button semi-transparent when not ready
  transition: 'opacity 0.3s ease',
});

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [isReady, setIsReady] = useState(false); // 1. New state to track if player is ready

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const togglePlay = () => {
    // Only allow toggling if the player is ready
    if (isReady) {
      setIsPlaying(!isPlaying);
    }
  };

  // 2. This function will be called by ReactPlayer when it's ready
  const handleReady = () => {
    console.log('Player is ready!');
    setIsReady(true);
  };
  
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <div style={playerWrapperStyle}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=H2kTgyg8xEs&list=RDH2kTgyg8xEs&start_radio=1"
          playing={isPlaying}
          loop={true}
          volume={0.5}
          controls={false}
          width="100%"
          height="100%"
          config={{
            youtube: {
              playerVars: {
                playsinline: 1,
              },
            },
          }}
          onReady={handleReady} // 3. Tell the player to call our function when ready
        />
      </div>

      <button 
        onClick={togglePlay} 
        style={getButtonStyle(isReady)}
        disabled={!isReady} // 4. Disable the button until the player is ready
      >
        {isPlaying ? '⏸️' : '🎵'}
      </button>
    </>
  );
}