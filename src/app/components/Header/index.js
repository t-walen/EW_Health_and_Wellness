import React from 'react';
import Logo from './logo';
import Link from "next/link";
import { LinkedInIcon, Instagram, TikTokIcon, SunIcon, MoonIcon } from '../icons';


const Header = () => {
  return (
    <header className="w-full p-6 px-24 flex items-center justify-between">
        <Logo />
        <nav className="w-max py-4 px-12 border border-dark rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm">
            <Link href="/" className="mr-1 text-lg">Home</Link>
            <Link href="/About" className="mx-4 text-lg">About</Link>
            <Link href="/Contact" className="mr-4 text-lg">Contact</Link>
            <button><SunIcon/></button>
        </nav>
    <div>
        <a href="https://www.linkedin.com/in/duqerin/" className="inline-block w-6 h-6 mr-4 hover:scale-125 transition-all ease duration-200"><LinkedInIcon/></a>
        <a href="https://www.instagram.com/erin_walen?igsh=d2JhcGx6bTcxaDB5" className="inline-block w-6 h-6 mr-4 hover:scale-125 transition-all ease duration-200"><Instagram/></a>
        <a href="https://www.tiktok.com/@erinaudreyrn?_t=8licRfZ19kF&_r=1" className="inline-block w-6 h-6 mr-4 hover:scale-125 transition-all ease duration-200"><TikTokIcon/></a>

    </div>
    </header>
  )
}

export default Header;
