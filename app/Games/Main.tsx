import Secondmain from "./Components/Secondmain";
import styles from "./main.module.css";
import FloatingLines from "./BG/Pixel";
const games = [
  {
    gamename: 'Football Clubs',
    logolink: 'https://barcauniversal.com/wp-content/uploads/2024/04/fbl-esp-liga-barcelona-2-scaled.jpg',
    description: 'Guess the football club by its badge or hints.',
    goto: 'Playing/ftc'
  },
  {
    gamename: 'Surah Name',
    logolink: 'https://i0.wp.com/onepathnetwork.com/wp-content/uploads/2017/09/reasons_to_read_quran.jpg?fit=650%2C366&ssl=1',
    description: 'Guess the Surah name from hints or audio.',
    goto: 'Playing/surah'
  },
  {
    gamename: 'Countries Flag',
    logolink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_mgAfuMXiDqOwGbs4-G-C2g5k0t85R6YRbg&s',
    description: 'Guess the country from its flag.',
    goto: 'Playing/flags'
  },
  {
    gamename: 'Mathematics',
    logolink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Q65PBnqeHTvB2KWVx4ge09wwa93o-YX9og&s',
    description: 'Solve math problems and quick challenges.',
    goto: 'Playing/math'
  },
  {
    gamename: 'Football Players',
    logolink: 'https://www.ambiance-sticker.com/al_copyrighter.php?image=images/Image/sticker-football-players3-ambiance-sticker-kil-footballplayers3.png&sens=25&color=28&forcew=310&forceh=310',
    description: 'Guess the football player from clues.',
    goto: 'Playing/players'
  },
  {
    gamename: 'Video Games',
    logolink: 'https://m.media-amazon.com/images/I/51W7rcR559L.jpg',
    description: 'Guess the video game name based on hints.',
    goto: 'Playing/videogames'
  },
  {
    gamename: 'Wordle',
    logolink: 'https://static01.nyt.com/images/2022/03/02/crosswords/alpha-wordle-icon-new/alpha-wordle-icon-new-smallSquare252-v3.png?format=pjpg&quality=75&auto=webp&disable=upscale',
    description: 'Play Wordle-style daily guessing.',
    goto: 'https://abrain.vercel.app/'
  },
  {
    gamename: 'Brands',
    logolink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkg5YsDPLhS7l2lc35g0IzMCqxPB4CqjkBMg&s',
    description: 'Guess the brand from icons or slogans.',
    goto: 'Playing/brand'
  },
  {
    gamename: 'Animals',
    logolink: 'https://media.wired.com/photos/593261cab8eb31692072f129/3:2/w_2560%2Cc_limit/85120553.jpg',
    description: 'Guess the animal from silhouette or hints.',
    goto: 'Playing/animals'
  },
  {
    gamename: 'Anime',
    logolink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRceZ3oUQdQYWeMUU-SACGl5khf-uy3QUfExg&s',
    description: 'Guess the anime based on characters or scenes.',
    goto: 'Playing/anime'
  },
  {
    gamename: 'Anime Characters',
    logolink: 'https://img.freepik.com/photos-gratuite/anime-girl-with-pink-hair-and-cherry-blossoms_23-2152016690.jpg?semt=ais_incoming&w=740&q=80',
    description: 'Guess the anime character from clues.',
    goto: 'Playing/animecharacters'
  },
   {
    gamename: 'Movie',
    logolink: 'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456',
    description: 'Guess the movie based on characters or scenes.',
    goto: 'Playing/movie'
  }
];

export default function Main() {
  return (
    <div className={styles.wrapper}>

      {/* Background animation */}
      <div className={styles.bg}>
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]} 
          lineCount={[10, 15, 20]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>


      <div className={styles.content}>
        {games.map((val,i)=><div key={i} className={styles.squares}><Secondmain gamename={val.gamename} logolink={val.logolink} description={val.description} goto={val.goto} /></div> )}

      </div>

    </div>
  );
}
