import "../styles/global.scss";

const Navbar = () => {
  return (
  <div>
    <div className='bg-brand-secondary'>
    <div className='bg-brand-secondary p-x-74'>
      <div className='d-flex flex-center justify-space-between p-t-40'>
        <div className="d-flex justify-left ">
          <img src="/logo.png" alt="Logo" className='m-l-40' width={90} height={105} />
          <p className="f-16-18-400-nav-primary m-l-32 m-t-60 font-title">Join the Diamond Club: Where Blockchain Meets Exclusivity.</p>
        </div>
        <div className="m-r-32">
        <div className="image-container">
        <img src="button.png" alt="button" className="h-100 w-380 cursor-pointer " />
        <div className="f-30-32-200-hold m-r-16 text-overlay font-title cursor-pointer ">Join Our Community</div>
        </div>
          <div className="d-flex justify-flex-end gap-4 m-r-60 ">
            <img src="/instagram.png" alt="IG" width={25} height={25} />
            <img src="/telegram.png" alt="Telegram" width={25} height={25} />
            <img src="/twitter.png" alt="Twitter" width={25} height={25} />
            <img src="/linkedin.png" alt="LinkedIn" width={25} height={25} />
          </div>
        </div>
      </div>
      </div>
      <div className="p-x-118 m-t-24"><hr/></div>
   <div className='d-flex'>
    <div className="cursor-pointer d-flex f-17-18-200-nav-primary gap-8 m-l-60 m-t-21 p-x-60 m-b-0">
      <p>Diamond Token</p>
      <p>Invest</p>
      <p>Reward</p>
      <p>About</p>
      <p>Blog</p>
      <p>Roadmap</p>
      <p>Membership</p>
    </div>
    <div className='justify-flex-end colors-w-t'>
      <span className='d-flex p-40 gap-5  m-l-610 f-17-18-200-white '>
        <p className='m-l-12 m-t--12 cursor-pointer'>Log In</p>
        <p className='m-t-0 m-l-8 icon-16-wallet'>0</p>
      </span>
    </div>
    </div>
    </div>
  </div>
  );
};

export default Navbar;
