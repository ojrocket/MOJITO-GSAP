const Hero = () => {
    return (
      <>
       <section id="hero" className="noisy">
        <h1 className="tile">OJROCKET</h1>
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
              <p className="subtitle">Lorem ipsum <br/>accusamus minima atque </p>
              <div></div>
            </div>
          </div>
        </div>
       </section>
      </>
    )
}

export default Hero;
