// src/components/Navigation.jsx
import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.navLink}>Home</Link>
      <Link href="/gallery" className={styles.navLink}>Gallery</Link>
      <Link href="/message" className={styles.navLink}>Message</Link>
      <Link href="/game" className={styles.navLink}>Game</Link>
    </nav>
  );
}