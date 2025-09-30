// src/app/game/page.tsx
'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import styles from './Game.module.css';

export default function GamePage() {
  // State to track which decorations are visible
  const [decorations, setDecorations] = useState({
    strawberry: false,
    candle: false,
  });

  const addDecoration = (item: keyof typeof decorations) => {
    setDecorations((prev) => ({ ...prev, [item]: true }));
  };

  // Check if all decorations have been added
  const allDecorated = useMemo(() => 
    Object.values(decorations).every(Boolean), 
    [decorations]
  );

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Let's Decorate a Cake!</h1>

      <div className={styles.gameArea}>
        {/* The cake area where decorations will appear */}
        <div className={styles.cakeContainer}>
          <Image src="/images/cakebase.png" alt="Cake" width={400} height={400} />
          
          {/* Conditionally render decorations */}
          {decorations.strawberry && (
            <Image src="/images/strawberry.png" alt="Strawberry" width={420} height={420} className={styles.strawberry} />
          )}
          {decorations.candle && (
            <Image src="/images/candle.jpg" alt="Candle" width={50} height={60} className={styles.candle} />
          )}
        </div>

        {/* Buttons to add decorations */}
        <div className={styles.controls}>
          {!allDecorated ? (
            <>
              {!decorations.strawberry && <button onClick={() => addDecoration('strawberry')}>Add a Strawberry</button>}
              {!decorations.candle && <button onClick={() => addDecoration('candle')}>Add a Candle</button>}
            </>
          ) : (
            // Final message when the cake is done
            <div className={styles.finalMessage}>
              <h2>Yeheyy! Happy Birthdayyy! 🎂</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}