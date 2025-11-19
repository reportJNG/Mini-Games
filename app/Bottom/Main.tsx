import styles from './Main.module.css';
import {FiGithub, FiInstagram} from 'react-icons/fi';
export default function Main (){

    return(
        <div className={styles.container}>
            <div className={styles.socials}>
                    <a href="https://www.instagram.com/re_hamza_0/" target='_blank'> <button className={styles.instgram}><FiInstagram/> </button> </a>
                    <a href="https://github.com/reportJNG" target='_blank'> <button className={styles.github}><FiGithub/> </button> </a>
            </div>
            <div className={styles.text}>
                    <p className={styles.tag}>@2025</p>
                    <h3>By Hamza DeV</h3>
            </div>
        </div>
    )
}