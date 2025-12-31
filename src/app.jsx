import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import Cocktails from './components/Cocktails.jsx';
import About from './components/about.jsx';
import Art from './components/Art.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Cocktails />
            <About />
            <Art />
        </main>
    )
 }
export default App;
