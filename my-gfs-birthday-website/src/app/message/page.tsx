// src/app/message/page.tsx
'use client'; // This is required for using state and event listeners

import { useState } from 'react';
import Image from 'next/image';
import styles from './Message.module.css';

export default function MessagePage() {
  // State to track if the message has been revealed
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
  };

  return (
    <div className={styles.pageContainer}>
      {!isRevealed ? (
        // The button/element to click to reveal the message
        <div className={styles.revealContainer}>
          <button onClick={handleReveal} className={styles.revealButton}>
            <Image 
              src="/images/envelope.png" // You'll need an envelope icon for this!
              alt="Click to open message"
              width={700}
              height={500}
            />
            <span>A Special Message for You</span>
          </button>
        </div>
      ) : (
        // The message card that appears after clicking
        <div className={styles.messageCard}>
          <h2>To My Dearest,</h2>
          <p>
            Happy Birthday Babyyy!!! A site only for u hehe. Every day with you is an adventure, and my favorite one. (frfr)
            Thank you for filling my life with so much joy and laughter.
          </p>
          <p>
            I hope you have the most amazing day, because you deserve nothing
            but the best. I love you more than words can say!
          </p>
          <p className={styles.signature}>- With all my love, Jansen</p>
        </div>
      )}
    </div>
  );
}