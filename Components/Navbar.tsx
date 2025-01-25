"use client";
import React, { useState, MouseEvent } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import image from "../app/assests/Logo-Brown_Instagram.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  // Toggle function
  const toggleMenu = (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
    console.log('Menu state:', !isOpen);
  };

  const pathname = usePathname(); // Get current path

  return (
    <div>
      <nav className="flex items-center justify-between md:p-4 px-4 md:px-8 lg:px-16 w-full">
        {/* Logo */}

        <Link href="/">
        <div className="flex items-center">
          <Image
            width={110}
            height={110}
            alt="Logo"
            src={image}
            className="md:w-[100px] md:pb-[20px] w-[80px] rounded-full"
            />
        </div>
            </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex ml-[660px] space-x-8 items-center font-['Nunito']">
          <div className={`text-[24px] font-gilroy font-normal leading-none ${pathname === '/' ? 'text-black ' : 'text-gray-700 hover:text-gray-600'}`}>
            <Link href="/">Home</Link>
          </div>
          <div className={`text-[24px] font-gilroy font-normal leading-none ${pathname === '/aboutus' ? 'text-black ' : 'text-gray-700 hover:text-gray-600'}`}>
            <Link href="/aboutus">About us</Link>
          </div>
          <div className={`text-[24px] font-gilroy font-normal leading-none ${pathname === '/villas' ? 'text-black ' : 'text-gray-700 hover:text-gray-600'}`}>
            <Link href="/villas">Villas</Link>
          </div>
        </div>

        {/* Schedule a Call Button (Desktop) */}
        <div className="hidden md:block">
        <Link href="#calling">
        <div className="w-[270px] hover:drop-shadow-xl cursor-pointer hover:shadow-sm pr-[3px] h-[62px] py-[22px] bg-[#4c2b21] rounded-[11px] flex justify-center items-center">
            <div className="text-white md:px-[2px]  pt-[3px]  text-[25px] font-gilroy_medium">Schedule a call</div>
          </div>
        </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden   text-gray-800 text-3xl focus:outline-none">
          ☰
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-[90px] left-0 w-full bg-white z-10 flex flex-col items-center py-4 space-y-4 md:hidden font-['Nunito']">
            <div className={`${pathname === '/' ? 'text-black ' : 'text-gray-700 hover:text-gray-600'} text-xl font-gilroy font-normal leading-none`} onClick={toggleMenu}>
              <Link href="/">Home</Link>
            </div>
            <div className={`${pathname === '/aboutus' ? 'text-black ' : 'text-gray-700 hover:text-gray-600'} text-xl font-gilroy font-normal leading-none`} onClick={toggleMenu}>
              <Link href="/aboutus">About us</Link>
            </div>
            <div className={`${pathname === '/villas' ? 'text-black ' : 'text-gray-700 hover:text-gray-600'} text-xl font-gilroy font-normal leading-none`} onClick={toggleMenu}>
              <Link href="/villas">Villas</Link>
            </div>
            <div
              className="bg-[#4c2b21]  text-white text-xl font-gilroy_medium font-normal rounded-[11px] hover:bg-[#3e2a1d] transition duration-200 py-2 px-4"
              onClick={toggleMenu}
            >
            <Link className='' href="#calling">
            
              Schedule a call
            </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
