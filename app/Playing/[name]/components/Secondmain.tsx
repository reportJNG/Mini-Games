

import Image from 'next/image';
import styles from './Secondmain.module.css';

interface secondmainprops{
    title:string,link:string,f:string,s:string,t:string,onev:(name:string,answer:string)=>void,a:string
}
export default function Secondmain ({title,link,f,s,t,a,onev}:secondmainprops){

    return(
        <div className={styles.container}>
            
        <div className={styles.upper}>

        
        <div className={styles.title}>
            <h1 className={styles.textitle}>{title}</h1>
        </div>
</div>
<div className={styles.mid}>
        <div className={styles.box}>
            <Image src={`${link}`} alt='geuss image' fill/>
        </div>
</div>

<div className={styles.bottom}>
        <div className={styles.buttons}>
            <button onClick={()=>onev(f,a)}>{f}</button>
            <button onClick={()=>onev(s,a)}>{s}</button>
            <button onClick={()=>onev(t,a)}>{t}</button>
        </div>
</div>
        </div>  
    )
}