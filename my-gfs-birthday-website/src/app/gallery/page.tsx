// src/app/gallery/page.tsx
import PhotoCard from '@/components/PhotoCard';
import styles from './Gallery.module.css';

const photos = [
  // ... your photo data is still here, no changes needed ...
  { imageUrl: '/images/1.jpg', caption: 'Our first anniversary!', rotation: -3, },
  { imageUrl: '/images/2.jpg', caption: 'Acshaully...☝️🤓', rotation: 2, },
  { imageUrl: '/images/3.jpg', caption: 'Valentines Date <3', rotation: -2, },
  { imageUrl: '/images/4.jpg', caption: 'Cubao expo stroll', rotation: 4, },
  { imageUrl: '/images/5.jpg', caption: 'ANIMO USTE!!', rotation: -1, },
  { imageUrl: '/images/6.jpg', caption: 'rawr', rotation: 3, },
];

export default function GalleryPage() {
  return (
    // Step 1: This is our new full-screen background container
    <div className={styles.backgroundContainer}>
      {/* Step 2: This container now only centers the content */}
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Our Photo Album </h1>
        <div className={styles.galleryGrid}>
          {photos.map((photo, index) => (
            <PhotoCard
              key={index}
              imageUrl={photo.imageUrl}
              caption={photo.caption}
              rotation={photo.rotation}
            />
          ))}
        </div>
      </div>
    </div>
  );
}