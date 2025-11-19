'use client'
import styles from './Correct.module.css';
import { useRouter } from 'next/navigation';
import { FaTrophy } from 'react-icons/fa';

interface correctprops {
  nb: number;
}

export default function Correct({ nb }: correctprops) {
  const route = useRouter();

  return (
    <div className={styles.container}>
      
      {/* Confetti */}
      <div className={styles.confettiContainer}>
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className={styles.confetti}></div>
        ))}
      </div>

      <div className={styles.card}>
        <FaTrophy className={styles.trophy} />

        <h1 className={styles.titletxt}>You Got {nb} Answers Right!</h1>

        <p className={styles.commenttxt}>Try Others and Explore Your Knowledge</p>

        <div className={styles.links}>
          <p className={styles.goto} onClick={() => route.push('/Playing/movie')}>
            Movies
          </p>
          <br />
          <p className={styles.goto} onClick={() => route.push('/Playing/anime')}>
            Anime
          </p><br />
          <p className={styles.goto} onClick={() => route.push('/Playing/brand')}>
            Brand
          </p>
        </div>

        <button className={styles.playagain} onClick={() => window.location.reload()}>
          Play Again
        </button>
      </div>
    </div>
  );
}
