import Head from "./Header/Main";
import About from './Bottom/Main'
import Hom from './Home/Main'
export default function Home() {
  return (
    <div >
      <header>
        <Head/>
      </header>
    
     <main>
        <Hom/>
      </main>

      <footer>
          <About/>
      </footer>
    </div>
  );
}
