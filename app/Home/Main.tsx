import styles from './Main.module.css';
import GridMotion from './bg/Bg';
import Secondmain from './Components/Secondmain';

export default function Main (){
        const items :string[] = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOBiraNPz6D6igRcDk0yTplGxD3amullJXdQ&s','https://i.ytimg.com/vi/QtELCVmsvI4/maxresdefault.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTYL7e3pYzveu3eebHQAtjBol6wJv1UBtlg&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu4LkN6P5LgTRbVBg_-L65m49s7CeN4b1gcQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkdUfbzjLVd2edu9t-p7UpUtHeZLU96zmT9A&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH2v5BOTbrdRYK6MDvObyBCmv4vpwppzKD_Q&s',
  'https://downloadwap.com/thumbs2/android-games/thumbs/ico/1/logo-game-android.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNmy-cdzkXi_GL7GBTB5UdyHFQ_7gnGJ6Pw&s'
  ,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVIAzOI_gI-r9Rlw5oBMNMUOfcLNza_Jw9vg&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0FZZYsa9Y-v4bgW7wzGaPWs-Y9AcuMUGwpw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8nCgfOmRKrtM53_ejBqW9NsP84XwH8ID9g&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOBiraNPz6D6igRcDk0yTplGxD3amullJXdQ&s','https://i.ytimg.com/vi/QtELCVmsvI4/maxresdefault.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTYL7e3pYzveu3eebHQAtjBol6wJv1UBtlg&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu4LkN6P5LgTRbVBg_-L65m49s7CeN4b1gcQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkdUfbzjLVd2edu9t-p7UpUtHeZLU96zmT9A&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH2v5BOTbrdRYK6MDvObyBCmv4vpwppzKD_Q&s',
  'https://downloadwap.com/thumbs2/android-games/thumbs/ico/1/logo-game-android.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNmy-cdzkXi_GL7GBTB5UdyHFQ_7gnGJ6Pw&s'
  ,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVIAzOI_gI-r9Rlw5oBMNMUOfcLNza_Jw9vg&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0FZZYsa9Y-v4bgW7wzGaPWs-Y9AcuMUGwpw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8nCgfOmRKrtM53_ejBqW9NsP84XwH8ID9g&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOBiraNPz6D6igRcDk0yTplGxD3amullJXdQ&s','https://i.ytimg.com/vi/QtELCVmsvI4/maxresdefault.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTYL7e3pYzveu3eebHQAtjBol6wJv1UBtlg&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu4LkN6P5LgTRbVBg_-L65m49s7CeN4b1gcQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkdUfbzjLVd2edu9t-p7UpUtHeZLU96zmT9A&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH2v5BOTbrdRYK6MDvObyBCmv4vpwppzKD_Q&s',
  'https://downloadwap.com/thumbs2/android-games/thumbs/ico/1/logo-game-android.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNmy-cdzkXi_GL7GBTB5UdyHFQ_7gnGJ6Pw&s'
  ,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVIAzOI_gI-r9Rlw5oBMNMUOfcLNza_Jw9vg&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0FZZYsa9Y-v4bgW7wzGaPWs-Y9AcuMUGwpw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8nCgfOmRKrtM53_ejBqW9NsP84XwH8ID9g&s',
];




    return(
   <div className={styles.wrapper}>
      
      <div className={styles.bg}>
        <GridMotion items={items} />
      </div>

      <div className={styles.content}>
        <Secondmain />
      </div>

    </div>


    )
}
