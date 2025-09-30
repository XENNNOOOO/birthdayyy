// src/components/AnimatedIntro.tsx
import styles from './AnimatedIntro.module.css';

export default function AnimatedIntro() {
  // We use a React Fragment (<>...</>) because we no longer need a wrapping div
  return (
    <>
      <h1 className={styles.title}>Happy Birthday,</h1>
      <h2 className={styles.subtitle}>My Baby! ❤️</h2>
    </>
  );
}