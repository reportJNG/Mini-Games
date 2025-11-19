'use client'

import { useRouter } from 'next/navigation';
import styles from './main.module.css';
import { FiSkipBack } from 'react-icons/fi';
import Secondmain from '../components/Secondmain';
import { useState,useEffect } from 'react';
import Correct from '../components/Correct'


interface MainProps {
  name: string;   
}
interface QuestionItem {
  title: string;
  link: string;
  f: string;
  s: string;
  t: string;
  answer: string;
}

export default function Main({ name }: MainProps) {
  const router = useRouter();
  const [nb,setNb]=useState(0);
    const [correct,setCorrect]=useState(0);
    const [show,setShow]=useState(false);
const data: Record<string, QuestionItem[]> = {
  ftc: [
    { title: "Which club is this logo?", link: "https://assets.goal.com/images/v3/blt4f89aed20a0c9295/291130d739e92d6d966fcc13d5bee0d67c46fc77.jpg?auto=webp&format=pjpg&width=3840&quality=60", f: "Barcelona", s: "Chelsea", t: "Juventus", answer: "Barcelona" },
    { title: "Which club is this logo?", link: "https://logos-world.net/wp-content/uploads/2020/07/PSG-Logo-1972.png", f: "PSG", s: "Real Madrid", t: "AC Milan", answer: "PSG" },
    { title: "Which club is this logo?", link: "https://png.pngtree.com/png-clipart/20200720/original/pngtree-liverpool-logo-design-circle-concept-for-supporter-png-image_4316674.jpg", f: "Liverpool", s: "Arsenal", t: "Inter Milan", answer: "Liverpool" },
    { title: "Which club is this logo?", link: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bayern_M%C3%BCnchen_Logo_%281924-1954%29.svg/1077px-Bayern_M%C3%BCnchen_Logo_%281924-1954%29.svg.png", f: "Dortmund", s: "Bayern", t: "Leipzig", answer: "Bayern" },
    { title: "Which club is this logo?", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wpoTNNKJFrGT71b-ZKZwizn6bdQnpTDhCQ&s", f: "Roma", s: "Napoli", t: "Lazio", answer: "Roma" },
    { title: "Which club is this logo?", link: "https://cdn.freebiesupply.com/logos/large/2x/manchester-city-fc-logo-png-transparent.png", f: "Man City", s: "Man United", t: "Everton", answer: "Man City" },
    { title: "Which club is this logo?", link: "https://logos-world.net/wp-content/uploads/2020/06/atletico-madrid-Logo.png", f: "Valencia", s: "Sevilla", t: "Atletico Madrid", answer: "Atletico Madrid" },
    { title: "Which club is this logo?", link: "https://brandlogos.net/wp-content/uploads/2014/10/sl_benfica-logo_brandlogos.net_luvkq-512x504.png", f: "Benfica", s: "Porto", t: "Sporting", answer: "Benfica" },
    { title: "Which club is this logo?", link: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Logo_AFC_Ajax_%281928-1991%2C_2025-%29.png/500px-Logo_AFC_Ajax_%281928-1991%2C_2025-%29.png", f: "Ajax", s: "Feyenoord", t: "PSV", answer: "Ajax" },
    { title: "Which club is this logo?", link: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Galatasaray_Sports_Club_Logo.svg/782px-Galatasaray_Sports_Club_Logo.svg.png", f: "Galatasaray", s: "Fenerbahce", t: "Besiktas", answer: "Galatasaray" },
  ],

  surah: [
    { title: "Which Surah is this Ayah from?", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPs0Y-84pzWksNR8ap_xU_lb0GgyLX9uVCw&s", f: "Al-Fatiha", s: "Al-Ikhlas", t: "Al-Baqarah", answer: "Al-Fatiha" },
    { title: "Which Surah?", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0_Stz6-EALSZyqtBi1A_TGgzW8WuHNNwgbQ&s", f: "Al-Kafirun", s: "Al-Ma'un", t: "An-Nas", answer: "An-Nas" },
    { title: "Which Surah?", link: "https://s3.picofile.com/file/7634085799/Pic%2011.gif", f: "Al-Falaq", s: "Al-Humazah", t: "Al-Qadr", answer: "Al-Falaq" },
    { title: "Which Surah?", link: "https://i.etsystatic.com/36996405/r/il/eef913/5181412034/il_340x270.5181412034_lkwv.jpg", f: "Al-Mulk", s: "Ya-Sin", t: "Al-Kahf", answer: "Ya-Sin" },
    { title: "Which Surah?", link: "https://media.suara.com/pictures/original/2021/11/29/87564-surah-ar-rahman-full-arab.jpg", f: "Ar-Rahman", s: "Al-Qadr", t: "Al-Layl", answer: "Ar-Rahman" },
    { title: "Which Surah?", link: "https://i.ytimg.com/vi/FqN28i_BrhM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAT-bL85QOP-xwy5pBWa72J_YsbGQ", f: "Al-Baqarah", s: "Ali Imran", t: "An-Nisa", answer: "Al-Baqarah" },
    { title: "Which Surah?", link: "https://www.nospetitsmusulmans.com/pages/coran/images/112_img.jpg", f: "Al-Ikhlas", s: "Al-Ma'idah", t: "At-Takwir", answer: "Al-Ikhlas" },
    { title: "Which Surah?", link: "https://www.nospetitsmusulmans.com/pages/coran/images/097_img.jpg", f: "Al-Qadr", s: "Al-Masad", t: "Al-Fajr", answer: "Al-Qadr" },
    { title: "Which Surah?", link: "https://i.pinimg.com/736x/bd/08/31/bd08319b6a8d711f49743e140e4b3598.jpg", f: "At-Tin", s: "Ad-Duha", t: "Al-Mutaffifin", answer: "Ad-Duha" },
    { title: "Which Surah?", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaKloKY94-69MTz8DTrCIgwfUTEtSaizvgZw&s", f: "An-Nasr", s: "Abasa", t: "Al-Qari'ah", answer: "An-Nasr" },
  ],

  flags: [
    { title: "Which flag is this?", link: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-18/256/0191.png", f: "Japan", s: "South Korea", t: "China", answer: "Japan" },
    { title: "Which flag is this?", link: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1280px-Flag_of_Italy.svg.png", f: "Italy", s: "Mexico", t: "Ireland", answer: "Italy" },
    { title: "Which flag is this?", link: "https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f1e9-1f1ea.png", f: "Germany", s: "Belgium", t: "Uganda", answer: "Germany" },
    { title: "Which flag is this?", link: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png", f: "Brazil", s: "Argentina", t: "Colombia", answer: "Brazil" },
    { title: "Which flag is this?", link: "https://images.emojiterra.com/google/android-11/512px/1f1f9-1f1f7.png", f: "Turkey", s: "Tunisia", t: "Morocco", answer: "Turkey" },
    { title: "Which flag is this?", link: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/1280px-Flag_of_Algeria.svg.png", f: "Algeria", s: "Pakistan", t: "Saudi Arabia", answer: "Algeria" },
    { title: "Which flag is this?", link: "https://images.emojiterra.com/google/android-10/512px/1f1ee-1f1f3.png", f: "India", s: "Niger", t: "Ireland", answer: "India" },
    { title: "Which flag is this?", link: "https://images.emojiterra.com/google/android-11/512px/1f1e8-1f1e6.png", f: "Canada", s: "Austria", t: "Denmark", answer: "Canada" },
    { title: "Which flag is this?", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS2mmMSUyGcPIb6wXDPc1v4HFQCYz6MM6CHQ&s", f: "Russia", s: "Serbia", t: "Netherlands", answer: "Russia" },
    { title: "Which flag is this?", link: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/2560px-Flag_of_Sweden.svg.png", f: "Sweden", s: "Ukraine", t: "Finland", answer: "Sweden" },
  ],

math: [
  { title: "5 + 7 = ?", link: "https://latex.codecogs.com/png.latex?5%20%2B%207%20%3D%20%3F", f: "10", s: "12", t: "14", answer: "12" },
  { title: "12 × 2 = ?", link: "https://latex.codecogs.com/png.latex?12%20%5Ctimes%202%20%3D%20%3F", f: "22", s: "24", t: "26", answer: "24" },
  { title: "9 - 3 = ?", link: "https://latex.codecogs.com/png.latex?9%20-%203%20%3D%20%3F", f: "6", s: "4", t: "5", answer: "6" },
  { title: "8 × 3 = ?", link: "https://latex.codecogs.com/png.latex?8%20%5Ctimes%203%20%3D%20%3F", f: "21", s: "24", t: "26", answer: "24" },
  { title: "25 ÷ 5 = ?", link: "https://latex.codecogs.com/png.latex?25%20%5Cdiv%205%20%3D%20%3F", f: "4", s: "5", t: "6", answer: "5" },
  { title: "15 + 17 = ?", link: "https://latex.codecogs.com/png.latex?15%20%2B%2017%20%3D%20%3F", f: "33", s: "32", t: "31", answer: "32" },
  { title: "100 - 40 = ?", link: "https://latex.codecogs.com/png.latex?100%20-%2040%20%3D%20%3F", f: "50", s: "60", t: "70", answer: "60" },
  { title: "9 × 9 = ?", link: "https://latex.codecogs.com/png.latex?9%20%5Ctimes%209%20%3D%20%3F", f: "81", s: "72", t: "90", answer: "81" },
  { title: "14 + 5 = ?", link: "https://latex.codecogs.com/png.latex?14%20%2B%205%20%3D%20%3F", f: "19", s: "21", t: "17", answer: "19" },
  { title: "7 × 6 = ?", link: "https://latex.codecogs.com/png.latex?7%20%5Ctimes%206%20%3D%20%3F", f: "42", s: "36", t: "48", answer: "42" },
]
,

  players: [
    { title: "Which player is this?", link: "https://pbs.twimg.com/media/DgiviGXXkAAgPMH.jpg", f: "Messi", s: "Ronaldo", t: "Neymar", answer: "Messi" },
    { title: "Which player is this?", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nCtQ-My785thHFOA7eveI9i6PkQRJgAK5A&s", f: "Mbappé", s: "Haaland", t: "Salah", answer: "Mbappé" },
    { title: "Which player is this?", link: "https://media.gettyimages.com/id/1041288176/fr/photo/the-face-of-portugese-player-and-caption-cristiano-ronaldo-is-hidden-by-fifa-world-cup-soccer.jpg?s=612x612&w=gi&k=20&c=dMCGiTEwDFAvcZq9juAkt7lRRxk4yYQZ1oY8YrSUlOY=", f: "Ronaldo", s: "Messi", t: "Benzema", answer: "Ronaldo" },
    { title: "Which player is this?", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9rPcuU4k-D5rx9FYGDrveWbVjY5MAB34NYQ&s", f: "Modrić", s: "Kroos", t: "Gavi", answer: "Modrić" },
    { title: "Which player is this?", link: "https://i2-prod.mirror.co.uk/article5637419.ece/ALTERNATES/s1200b/Screen-Shot-2015-05-04-at-223036.png", f: "Lewandowski", s: "Kane", t: "Suarez", answer: "Lewandowski" },
    { title: "Which player is this?", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF5jSbgdUSb9yRA1mpen7iEA5POXceNVDWDA&s", f: "Neymar", s: "Vinicius", t: "Rodrygo", answer: "Neymar" },
    { title: "Which player is this?", link: "https://i2-prod.mirror.co.uk/article26156056.ece/ALTERNATES/s1200b/0_salah-egypt.jpg", f: "Salah", s: "Mahrez", t: "Ziyech", answer: "Salah" },
    { title: "Which player is this?", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBoVE-xtC3wWYYkmf4nwuvaOaCvH_qQEt7oQ&s", f: "De Bruyne", s: "Bernardo Silva", t: "Foden", answer: "De Bruyne" },
    { title: "Which player is this?", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCRs0Cvrep6JXuI0ec8kBsEe7pXizaGw_dW1R76lihcOL9HFrYqOqQxsKCkaW24FV5rA&usqp=CAU", f: "Ramos", s: "Van Dijk", t: "Piqué", answer: "Ramos" },
    { title: "Which player is this?", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFHNlN0aFk_4bASbc0E00CuTMj9QwK6IaHjQ&s", f: "Casemiro", s: "Busquets", t: "Kanté", answer: "Casemiro" },
  ],

  videogames: [
    { title: "Which game is this?", link: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQz-6OgsRI0t7z12abeNGeO65y6c3ZdXAtbSIZHjXf6wCw7yXZnJOvSlmVkur0n", f: "Minecraft", s: "Fortnite", t: "Roblox", answer: "Minecraft" },
    { title: "Which game is this?", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTPyrXJJ7i78TxDFRyI5yuEePyCfiedhE-DQ&s", f: "GTA V", s: "Mafia II", t: "Watch Dogs", answer: "GTA V" },
    { title: "Which game is this?", link: "https://images.sftcdn.net/images/t_app-cover-s,f_auto/p/3b97416b-b633-4979-81b5-e116bbf700b6/636227071/pubg-mobile-Playing-PUBG-Mobile-windows.jpg", f: "PUBG", s: "Free Fire", t: "COD Mobile", answer: "PUBG" },
    { title: "Which game is this?", link: "https://imag.malavida.com/mvimgbig/download-fs/call-of-duty-legends-of-war-22143-9.jpg", f: "Call of Duty", s: "Battlefield", t: "Halo", answer: "Call of Duty" },
    { title: "Which game is this?", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlVjr0jJ1QjJLCUFSif51wcqq1mflJhDId1A&s", f: "Fortnite", s: "Apex Legends", t: "Valorant", answer: "Fortnite" },
    { title: "Which game is this?", link: "https://imag.malavida.com/mvimgbig/download-fs/fifa-21670-1.jpg", f: "FIFA 23", s: "PES 21", t: "Rocket League", answer: "FIFA 23" },
    { title: "Which game is this?", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyUlZ4VzysIhPq4hvUyPzjZ7XGciRB8TejoQ&s", f: "Among Us", s: "Fall Guys", t: "Human Fall Flat", answer: "Among Us" },
    { title: "Which game is this?", link: "https://www.thexboxhub.com/wp-content/uploads/2024/08/Valorant-review-2.jpg", f: "Valorant", s: "CS:GO", t: "Overwatch", answer: "Valorant" },
    { title: "Which game is this?", link: "https://static.wixstatic.com/media/0a4a01_a0e84b3fa2004f86a1a44decb9cb6462~mv2.webp/v1/fill/w_568,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/0a4a01_a0e84b3fa2004f86a1a44decb9cb6462~mv2.webp", f: "Roblox", s: "Minecraft", t: "Terraria", answer: "Roblox" },
    { title: "Which game is this?", link: "https://img.redbull.com/images/c_limit,w_1500,h_1000/f_auto,q_auto/redbullcom/2023/8/24/t95pz5f1ci0nfkeqs0bd/rocket-league-conseils", f: "Rocket League", s: "CarX", t: "Trackmania", answer: "Rocket League" },
  ],

  brand: [
    { title: "Which brand is this?", link: "https://media.about.nike.com/img/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg?m=eyJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjEwMH0sIndlYnAiOnsicXVhbGl0eSI6MTAwfSwiZXh0cmFjdCI6eyJsZWZ0IjozMzQsInRvcCI6MCwid2lkdGgiOjQwOTAsImhlaWdodCI6MjcyOH0sInJlc2l6ZSI6eyJ3aWR0aCI6Mzg0MH19fQ%3D%3D&s=9a07c8b736cf820f829f906d948eaffea72c5422c88d965fc6732d5d6a9c8b05", f: "Nike", s: "Adidas", t: "Puma", answer: "Nike" },
    { title: "Which brand is this?", link: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg", f: "Apple", s: "Samsung", t: "Huawei", answer: "Apple" },
    { title: "Which brand is this?", link: "https://wallpapers.com/images/hd/bmw-logo-pictures-img9m0bdvx94o0mt.jpg", f: "BMW", s: "Audi", t: "Mercedes", answer: "BMW" },
    { title: "Which brand is this?", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaiuy57_YELYByhzS7M6qWO0EiF8jsPfNerg&s", f: "Coca-Cola", s: "Pepsi", t: "Sprite", answer: "Coca-Cola" },
    { title: "Which brand is this?", link: "https://static.vecteezy.com/system/resources/thumbnails/010/994/239/small_2x/adidas-logo-black-symbol-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg", f: "Adidas", s: "Reebok", t: "Under Armour", answer: "Adidas" },
    { title: "Which brand is this?", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT79HHtrnc7gqsiOipcxwzoCPqG_l-thTiiCw&s", f: "McDonald's", s: "Burger King", t: "KFC", answer: "McDonald's" },
    { title: "Which brand is this?", link: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg", f: "Google", s: "Microsoft", t: "Amazon", answer: "Google" },
    { title: "Which brand is this?", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd05DaY4GdM9QoVpzcLRh4T4GRb9oZEgRzLw&s", f: "Intel", s: "AMD", t: "Nvidia", answer: "Intel" },
    { title: "Which brand is this?", link: "https://hips.hearstapps.com/hmg-prod/images/2025-tesla-model-s-1-672d42e172407.jpg?crop=0.465xw:0.466xh;0.285xw,0.361xh&resize=1200:*", f: "Tesla", s: "Toyota", t: "Honda", answer: "Tesla" },
    { title: "Which brand is this?", link: "https://i5.walmartimages.com/asr/a262df07-ab1f-4c52-98fa-7174894760b3.56648c8809f115db953710fcfe9d88c5.jpeg", f: "PlayStation", s: "Xbox", t: "Nintendo", answer: "PlayStation" },
  ],

  animals: [
    { title: "Which animal is this?", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnUw8cM_IlQFJjX8Uf3zNktxPpc84YQ74a4g&s", f: "Lion", s: "Tiger", t: "Leopard", answer: "Lion" },
    { title: "Which animal is this?", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSedLJzQ0HktQHZ9xyChuKjdGCe7EZT2TYy-Q&s", f: "Elephant", s: "Hippo", t: "Rhino", answer: "Elephant" },
    { title: "Which animal is this?", link: "https://i.ytimg.com/vi/UqIBh4-6CFY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD7Lm4g-uCzE3GvlpkV0nDddIv6CQ", f: "Giraffe", s: "Deer", t: "Camel", answer: "Giraffe" },
    { title: "Which animal is this?", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3eR_jstjw_iz1dr1gAykJTX97ETCSlCw2_g&s", f: "Fox", s: "Wolf", t: "Coyote", answer: "Fox" },
    { title: "Which animal is this?", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJcZxrOlr3h5NUnXrYXGJu3sEfBjrb7nt7NA&s", f: "Panda", s: "Koala", t: "Polar Bear", answer: "Panda" },
    { title: "Which animal is this?", link: "https://i.ytimg.com/vi/t_Kk3v24VCI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDgoFURA4RFE0Xgj67d0kl7HMolDA", f: "Shark", s: "Dolphin", t: "Whale", answer: "Shark" },
    { title: "Which animal is this?", link: "https://cdn.funtrivia.com/img/newcats/20546.jpg", f: "Eagle", s: "Falcon", t: "Hawk", answer: "Eagle" },
    { title: "Which animal is this?", link: "https://i.pinimg.com/736x/58/aa/45/58aa454145b8b931e173b5b0ec33ca9f.jpg", f: "Penguin", s: "Ostrich", t: "Duck", answer: "Penguin" },
    { title: "Which animal is this?", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSub0EdEnAEAloA4cgDTkgNJQcaXVSkN7EvBg&s", f: "Gorilla", s: "Chimpanzee", t: "Monkey", answer: "Gorilla" },
    { title: "Which animal is this?", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa-marLV0j4tD63ceqClV5Z0DQ8LNI1SrdFg&s", f: "Snake", s: "Lizard", t: "Crocodile", answer: "Snake" },
  ],

  anime: [
    { title: "Which anime is this?", link: "https://www.mangabox.fr/wp-content/uploads/2024/08/10-jutsus-naruto-puissants-1024x576.jpg", f: "Naruto", s: "Bleach", t: "One Piece", answer: "Naruto" },
    { title: "Which anime is this?", link: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/hulu/C624234616EC620D83B2A85CEC8DD30494DA175D8634EB9B8319CB776F8B5B58/compose?format=webp&width=2560", f: "Attack on Titan", s: "Tokyo Ghoul", t: "Death Note", answer: "Attack on Titan" },
    { title: "Which anime is this?", link: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GRMG8ZQZR-backdrop_wide", f: "One Piece", s: "Naruto", t: "Fairy Tail", answer: "One Piece" },
    { title: "Which anime is this?", link: "https://external-preview.redd.it/jujutsu-kaisen-season-3-will-be-some-of-the-best-anime-ever-v0-p0WFRquUzQSEo8nboYUCLPqj5ZhyiL9F6Yuu122FtGQ.jpeg?width=640&crop=smart&auto=webp&s=8dcacd2d0bd7e5547755d85906b5374fc1a6abad", f: "Jujutsu Kaisen", s: "Chainsaw Man", t: "Mob Psycho", answer: "Jujutsu Kaisen" },
    { title: "Which anime is this?", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMY9nxtH0URg2BhkTaHNNr6NGFdVE7ljrLgQ&s", f: "Bleach", s: "Blue Lock", t: "Demon Slayer", answer: "Demon Slayer" },
    { title: "Which anime is this?", link: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/G8DHV7W21-backdrop_wide", f: "Dragon Ball", s: "One Punch Man", t: "Hunter x Hunter", answer: "Dragon Ball" },
    { title: "Which anime is this?", link: "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfDT9h0_QRS2Qz6rThF2vE43LJAQjCYtgwcJe-CVuQm7J-w5dW1l3B2tYJ1ed4U0FeM2SrlXiUz_gru3FvbiLJwWCsB6_qYI6LQpAE1LTD5WZSkQ9YqVvnvs.jpg?r=54b", f: "Death Note", s: "Monster", t: "Black Clover", answer: "Death Note" },
    { title: "Which anime is this?", link: "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdlHh_YtG98oiBRF5Wx0aRlxpp-sUqvJJI0_LEKwvYYK6INiZo2oalV6hlAQOfJ9vtQTSKvaxCYIeNMn-K3HZR7NkWUDbKSXHP6Y.jpg?r=407", f: "Tokyo Ghoul", s: "AOT", t: "Chainsaw Man", answer: "Tokyo Ghoul" },
    { title: "Which anime is this?", link: "https://i0.wp.com/misaha.com/wp-content/uploads/2025/01/aaa253b7a9f9fb95264c68c31cd04b9030a5d7b0212e1b01d437dc5631c62799.jpg?fit=1920%2C1080&ssl=1", f: "Mob Psycho 100", s: "JJK", t: "Bleach", answer: "Mob Psycho 100" },
    { title: "Which anime is this?", link: "https://i.pinimg.com/originals/8d/68/fa/8d68fa4e98f819c50f7fe11ab255931e.jpg", f: "Blue Lock", s: "Haikyuu", t: "Kuroko", answer: "Blue Lock" },
  ],

  animecharacters: [
    { title: "Who is this character?", link: "https://i.quotev.com/ujh3l7jm7x3q.jpg", f: "Naruto", s: "Minato", t: "Boruto", answer: "Naruto" },
    { title: "Who is this character?", link: "https://www.dexerto.com/cdn-image/wp-content/uploads/2023/05/22/luffy-confused-face-one-piece.jpeg", f: "Luffy", s: "Ace", t: "Zoro", answer: "Luffy" },
    { title: "Who is this character?", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1GQWI4CGRGcpGgJ_Z_ctMTf_lEcNMYorMpw&s", f: "Ichigo", s: "Aizen", t: "Renji", answer: "Ichigo" },
    { title: "Who is this character?", link: "https://i.pinimg.com/736x/24/3b/5b/243b5b3ef70118641ee04b61d20fbe90.jpg", f: "Tanjiro", s: "Zenitsu", t: "Inosuke", answer: "Tanjiro" },
    { title: "Who is this character?", link: "https://luukminkman.com/media/filer_public_thumbnails/blog_posts/327/images/2.1%20Sketch%20The%20Outline%20Of%20Goku's%20Arms%20%26%20Legs.jpg__1000x1000_q65_subsampling-2.jpg", f: "Goku", s: "Vegeta", t: "Gohan", answer: "Goku" },
    { title: "Who is this character?", link: "https://cdn.technadu.com/wp-content/uploads/2022/02/light-yagami-death-parade-cameo.png", f: "Light Yagami", s: "L", t: "Near", answer: "Light Yagami" },
    { title: "Who is this character?", link: "https://i.redd.it/tdlj7uqwzq661.jpg", f: "Eren", s: "Levi", t: "Armin", answer: "Eren" },
    { title: "Who is this character?", link: "https://static.wikia.nocookie.net/blackclover/images/a/a3/Demon-Slayer_Sword.png/revision/latest?cb=20171114151754", f: "Asta", s: "Yuno", t: "Yami", answer: "Asta" },
    { title: "Who is this character?", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hLBJ_M5Ah6U2MD_3MBI9PtJ7K9_LurbsmQ&s", f: "Killua", s: "Gon", t: "Hisoka", answer: "Killua" },
    { title: "Who is this character?", link: "https://preview.redd.it/what-if-saitama-had-no-limbs-v0-cttfatv7dozc1.jpeg?width=640&crop=smart&auto=webp&s=c1aea266f4f5614b690eaa2e04dcf34eb15d63a5", f: "Saitama", s: "Genos", t: "Garou", answer: "Saitama" },
  ],
 
  movie: [
    { title: "Which movie is this scene from?", link: "https://images.theconversation.com/files/359713/original/file-20200924-16-bsgsp7.jpg?ixlib=rb-4.1.0&rect=33%2C186%2C1455%2C727&q=45&auto=format&w=1356&h=668&fit=crop", f: "Inception", s: "Interstellar", t: "Tenet", answer: "Inception" },
    { title: "Which movie?", link: "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/03/Training-Article-Feature-Image.jpg?w=1600&h=900&fit=crop", f: "Avengers", s: "Justice League", t: "X-Men", answer: "Avengers" },
    { title: "Which movie?", link: "https://static0.srcdn.com/wordpress/wp-content/uploads/2022/09/Avatar-Flying-Scene.jpg?w=1200&h=675&fit=crop", f: "Avatar", s: "Aquaman", t: "Titanic", answer: "Avatar" },
    { title: "Which movie?", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJgLSC2qr40gBt6oTH9_f4JFG89WZAaR9-g&s", f: "Spider-Man", s: "Batman", t: "Superman", answer: "Spider-Man" },
    { title: "Which movie?", link: "https://static0.srcdn.com/wordpress/wp-content/uploads/2025/08/the-vault-scene-fast-furious-1.jpg?w=1600&h=900&fit=crop", f: "Fast & Furious", s: "Transformers", t: "Need for Speed", answer: "Fast & Furious" },
    { title: "Which movie?", link: "https://ew.com/thmb/4Wfdy4yL5gIgeaXBxRPH2cwwjMY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/kit-1-2000-216d826da8bb4e76b39ade5757717312.jpg", f: "Harry Potter", s: "LOTR", t: "Narnia", answer: "Harry Potter" },
    { title: "Which movie?", link: "https://www.hollywoodreporter.com/wp-content/uploads/2019/03/the_matrix_1999-photofest_still_2-embed_-2019.jpg?w=928", f: "The Matrix", s: "John Wick", t: "Blade Runner", answer: "The Matrix" },
    { title: "Which movie?", link: "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-174472-MSDSTWA_EC007_H.jpg?w=1581&h=1054&crop=1", f: "Star Wars", s: "Star Trek", t: "Dune", answer: "Star Wars" },
    { title: "Which movie?", link: "https://www.longislandpress.com/wp-content/uploads/2024/08/Godfather_FilmScene-1024x692-1.jpg", f: "The Godfather", s: "Goodfellas", t: "Scarface", answer: "The Godfather" },
    { title: "Which movie?", link: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/3/4/1425473397067/71a057d9-d632-4980-89ae-2488785ab0ac-620x372.jpeg?width=465&dpr=1&s=none&crop=none", f: "Jurassic Park", s: "King Kong", t: "Jaws", answer: "Jurassic Park" },
  ],
};




  const list = data[name as keyof typeof data] ?? [];

  // timer
const [timer, setTimer] = useState(60);

useEffect(() => {
  if (timer <= 0) return;

  const interval = setInterval(() => {
    setTimer(prev => prev - 1);
  }, 500);

  return () => clearInterval(interval);
}, [timer]);
  const onclick = (name:string,answer:string) => {
    if(name===answer && timer >0){
      setCorrect(prev=>prev+1)
    }
    setNb(prev=>{
      const test:number = prev;
      if(test===9){
        setShow(true);
      }
      return prev+1;
      
    });
    setTimer(60)
  };

  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.backpage}>
          <FiSkipBack onClick={() => router.push('/Play')} />
        </div>

        <div className={styles.timer}>
          <h4 className={styles.timertext}>{timer}</h4>
        </div>
      </div>

     <div className={styles.mid}>
{
  list.filter((_,i)=> i===nb).map((val,i)=>(
      <div key={i} className={styles.questionCard}> 
      <Secondmain
        title={val.title}
        link={val.link}
        f={val.f}
        s={val.s}
        t={val.t}
        a={val.answer}
        onev={onclick}
      />
</div>

  ))
}{show&&<Correct nb={correct}/>}
</div>

    </div>
  );
}
