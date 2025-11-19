'use client'

import Image from 'next/image';
import styels from './secondmain.module.css';
import { useRouter } from 'next/navigation';
interface secondmainProps{
    gamename:string,logolink:string,description:string,goto:string
}
export default function Secondmain({gamename,logolink,description,goto}:secondmainProps){
const routes = useRouter();
const handleclick = (goto:string)=>{
    if(goto){
        const test = goto.slice(0,5);
        if(test==='https'){
            window.open('https://abrain.vercel.app/');
        }
        else{
            routes.push(`/${goto}`);
        }
    }
}
    return(
        <div className={styels.container}>
            <div className={styels.top}>
                <div className={styels.title}>
                        <h3>{gamename}</h3>
                </div>
                <div className={styels.logo}>
                    <Image src={logolink}  width={50} height={60} alt='logo' className={styels.images}/>
                </div></div>
                <div className={styels.mid}>
                        <p>
                            {description}
                        </p>
                </div>
                <div className={styels.bottom}>
                        <button onClick={()=>handleclick(goto)}>Play !</button>
                </div>
        </div>
    )
}