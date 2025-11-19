import styles from './secondmain.module.css';

export default function Secondmain() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Welcome to Random Mini Games</h2>
        <h4 className={styles.subtitle}>Where you explore the world</h4>
      </div>

      <div className={styles.mid}>
        {/* Text block below */}
        <p>
          Discover a collection of fun and unique mini-games crafted to entertain and
          challenge you. Explore different categories, improve your skills, and enjoy
          a smooth gaming experience designed to keep you excited and learning
        </p>
          <p className={styles.one}>something new every time you play</p>
        

        <p className={styles.two}>Jump in now and explore a world full of</p>
          <p className={styles.three}> creativity, surprises, and endless</p>
          <p className={styles.four}>fun your adventure starts here!</p>
        
      </div>
    </div>
  );
}
