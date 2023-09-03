import Image from 'next/image';
import logo from '../img/cumtech_logo.png';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex p-7 px-14">
      <Link href="/">
        <Image src={logo} alt="Logo"></Image>
      </Link>
      <div className="flex ml-auto">
        <div className="mr-7 text-xl flex items-center">
          <Link href="/work">Work</Link>
        </div>
        <div className="text-xl flex items-center">
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </header>
  );
};
