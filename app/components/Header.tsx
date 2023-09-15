'use client';
import Image from 'next/image';
import logo from '../img/cumtech_logo.png';
import { Link as Scroll, animateScroll } from 'react-scroll';

export const Header = () => {
  const scroll = animateScroll;
  return (
    <header className="fixed top-0 left-0 right-0 flex md:p-7 md:px-14 p-6">
      <a onClick={scroll.scrollToTop} className="md:hover:opacity-50">
        <Image src={logo} alt="Logo" className='w-5/6 md:w-auto md:cursor-pointer'></Image>
      </a>
      <div className="flex ml-auto">
        <div className="mr-7 text-xl flex items-center">
          <Scroll to="works" smooth={true} className="md:hover:opacity-50 md:cursor-pointer">
            Works
          </Scroll>
        </div>
        <div className="text-xl flex items-center">
          <Scroll to="contact" smooth={true} className="md:hover:opacity-50 md:cursor-pointer">
            Contact
          </Scroll>
        </div>
      </div>
    </header>
  );
};
