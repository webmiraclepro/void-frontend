import React, { useState, useEffect, useRef } from "react";
import ConnectButton from '../ConnectButton'
const close_icon = '/svg/close_icon.svg';
const hamburgerIcon = '/svg/hamburger.svg';
const logo = "/images/illogiclogo.png";


function useOutsideAlerter(ref: any, setOpenNav: any) {
  useEffect(() => {

    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenNav(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const Navbar = ({ logo }: any) => {

  const [openNav, setOpenNav] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setOpenNav);

  return (
    <div className="bg-bgprimary">
      {/* Mobile Nav */}

      <a onClick={() => setOpenNav(true)} className="absolute left-[40px] top-[20px] w-[30px] h-auto hover:text-navhover visible xl:invisible">
        <img src={hamburgerIcon} className='w-[30px] h-auto' alt="hamburgerIcon" />
      </a>

      {
        openNav &&
        <div ref={wrapperRef} className="fixed z-10 top-0 left-0 bottom-0 right-0 h-full bg-[#000000bf] w-full">
          <div className="flex flex-col z-[11] fixed top-0 bottom-0 left-0 w-[250px] bg-white h-full pt-36 pl-6">
            <div onClick={() => setOpenNav(false)} className="absolute left-[40px] top-[20px]">
              <img className="w-[30px] h-auto cursor-pointer" src={close_icon} alt="closeIcon" />
            </div>
            <div>
              <img src={logo} className='w-[50px] h-auto'/>
            </div>

            <div className="flex flex-col items-center justify-start h-full pt-5 pb-5">
              <a onClick={() => setOpenNav(false)} href="/" className="text-lg font-body transition-all hover:text-navhover">STAKING HUB
              </a>
              <a onClick={() => setOpenNav(false)} href="#allow-list" className="text-lg font-body transition-all hover:text-navhover">ALLOWLIST</a>
              <a onClick={() => setOpenNav(false)} href="/" className="text-lg font-body transition-all hover:text-navhover">WEBSITE</a>
            </div>
          </div>
        </div>
      }
      <div className="relative flex border-b-2 border-[#e7e8ec] sticky items-center p-0 pt-5 xl:p-5 invisible xl:visible">
        {/* Desktop Nav */}

        <div className="flex space-x-16 items-center invisible xl:visible">
          <a href="/" className="flex items-center pl-12">
            <img className="h-4/5 w-4/5" src={logo} alt="logo" />
            <div className="flex flex-col justify-center items-center pl-2.5">
              <div id="staking-nav-brand-title" className="text-xxxxl font-bold">Illogics</div>
              <div id="staking-nav-brand-subtitle" className="text-fsl font-bold">Ecosystem</div>
            </div>
          </a>
          <a href="#staking" className="flex text-xl font-body transition-all font-bold hover:text-navhover">
            STAKING HUB
            <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" className="pl-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
          </a>
          <a href="#allow-list" className="flex text-xl font-body transition-all font-bold hover:text-navhover">
            ALLOWLIST
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" className="pl-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"></path></svg>
          </a>
          <a href="/" className="flex text-xl font-body transition-all font-bold hover:text-navhover">
            WEBSITE
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="pl-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path></svg>
          </a>
        </div>

        <div className="mr-4 w-[160px] h-[50px] ml-auto visible">
          <ConnectButton actionText="CONNECT" />
        </div>
      </div>
    </div>

  );
};

export default Navbar;

