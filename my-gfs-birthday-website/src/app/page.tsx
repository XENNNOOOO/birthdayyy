// src/app/page.jsx
import AnimatedIntro from '@/components/AnimatedIntro'; 
import styles from './Home.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <AnimatedIntro />
    </div>
  );
}