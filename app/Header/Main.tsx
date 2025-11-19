'use client'
import Image from "next/image";
import styles from "./main.module.css";
import { useRouter } from "next/navigation";

export default function Main() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image
          src='https://www.nptsg.org.uk/wp-content/uploads/2023/01/mini-games-512.png'
          width={80}
          height={90}
          alt="logo"
          className={styles.pic}
        />
      </div>

      <div className={styles.buttons}>
        <button onClick={() => router.push("/")}>Home</button>
        <button onClick={() => router.push("/Play")}>Games</button>
      </div>
    </div>
  );
}
