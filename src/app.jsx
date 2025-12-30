import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <main>
            <Navbar/>
            <Hero/>
        </main>
    )
 }
export default App;
