import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";


const Hero = () => {
  const videoRef = useRef();

  const isMobile = useMediaQuery({maxWidth: 768});


  useGSAP(() => {
    const heroSplit = new SplitText('.title', { type: 'chars, words' });
    const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

    heroSplit.chars.forEach((char, i) => char.classList.add('text-gradient')) ;

      gsap.from(heroSplit.chars, {
        yPercent: 100,
        duration: 1.8,
        ease: 'expo.out',
        stagger: 0.06
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.5,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 1
    });
    
    gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      })
      .to('.hero-right-leaf', {y: 200},0)
      .to('.hero-left-leaf', {y: -200},0)
      const startValue = isMobile ? 'top 50%' : 'center 60%';   
      const endValue = isMobile ? '120% top' : 'bottom top';     

      let tl = gsap.timeline({
       scrollTrigger: {
        trigger: '.video',
        start: startValue,
        end: endValue,
        scrub: true,
        pin : true,
        },
     });
     videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current,{
        currentTime : videoRef.current.duration,
      });
     };
  } , []);
    return (
      <>
       <section id="hero" className="noisy">
        <h1 className="tile">RTG</h1>

        <img src="/images/hero-left-leaf.png"
        alt="hero left leaf"
        className="hero-left-leaf"/>

        <img src="/images/hero-right-leaf.png"
        alt="hero right leaf"
        className="hero-right-leaf"/>

        <div className="body">
          <div className="content">
            <div className="space-y-5 text-center">
              <p> COOL. CRISP. CLASSIC</p>
              <p className="subtitle">Sip the spirit <br /> of Summer </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">Every cocktail on our menu is a blend of premium ingredientsl, creative
          flair, and timeless recipes — designed to delight your senses .</p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
       </section>

       <div className="video absolute inset-0">
        <video 
        ref= {videoRef} 
        muted
        playsInline 
        preload="auto"
        src= "/videos/output.mp4"
        />
       </div>
      </>
    );
};

export default Hero;
