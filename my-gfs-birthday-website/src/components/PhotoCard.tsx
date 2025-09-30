// src/components/PhotoCard.tsx
import Image from 'next/image';
import styles from './PhotoCard.module.css';

// Define the types for the component's props with TypeScript
type PhotoCardProps = {
  imageUrl: string;
  caption: string;
  rotation: number;
};


export default function PhotoCard({ imageUrl, caption, rotation }: PhotoCardProps) {
  const style = {
    transform: `rotate(${rotation}deg)`,
  };

  return (
    <div className={styles.card} style={style}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt={caption}
          width={300}   // <-- ADD THIS
          height={300}  // <-- ADD THIS
          style={{ objectFit: 'cover' }}
        />
      </div>
      <p className={styles.caption}>{caption}</p>
    </div>
  );
}