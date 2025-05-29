const LandingHero = () => {
  
  return (
    <div className="d-flex justify-center p-330  image-overlay">
    <section className="justify-center">
      <h1 className= "d-flex f-110-120-100-white font-cursive justify-center">Join the Diamond Club</h1>
      <p className="justify-center font-title f-50-56-200-nav-primary">Where Blockchain Meets Exclusivity.</p>
      <div className="absolute bottom-8 right-8 m-t-36">
        <h3 className="justify-center font-title m-t-20 f-26-27-200-white">Revolutionizing luxury and transparency with blockchain-powered rewards and investments.</h3>
      </div>
      <div className="d-flex justify-center gap-12 m-t-40">
          <div className="image-container ">
        <img src="button.png" alt="button" className="h-120 w-440 cursor-pointer " />
        <div className="f-36-40-200-hold text-overlay font-title cursor-pointer ">Read Our Whitepaper</div>
        </div>
          <div className="image-container">
        <img src="button.png" alt="button" className="h-120 w-440 cursor-pointer " />
        <div className="f-36-40-200-hold text-overlay font-title cursor-pointer ">The Diamond Token</div>
        </div>
        </div>
    </section>
    </div>
  );
};

export default LandingHero;
