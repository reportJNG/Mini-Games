import { redirect } from "next/navigation";
import Head from "../../Header/Main";
import About from "../../Bottom/Main";
import Hom from "./root/Main";

export default async function Home({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  const allowed = [
    "ftc",
    "surah",
    "flags",
    "math",
    "players",
    "videogames",
    "brand",
    "animals",
    "anime",
    "animecharacters",
    "movie",
  ];

  if (!allowed.includes(name)) {
    redirect("/Playing/ftc");
  }

  return (
    <div>
      <header>
        <Head />
      </header>

      <main>
        <Hom name={name} />
      </main>

      <footer>
        <About />
      </footer>
    </div>
  );
}
