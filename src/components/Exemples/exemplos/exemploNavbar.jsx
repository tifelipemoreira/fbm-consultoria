import React, { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import brand from "../../assets/brand.png";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[100px] z-10 bg-fbmprimary fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
      <div className="flex justify-start items-center w-full h-28 ml-3">
            <Image src={brand} alt="Logo" width={175} height={60} />
        </div>
        <div className="flex text-white">
          <ul className="hidden md:flex space-x-6 text-[20px]">
            <li>
              <Link href="/" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/" smooth={true} offset={-200} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link href="/" smooth={true} offset={-50} duration={500}>
                Support
              </Link>
            </li>
            <li>
              <Link href="/" smooth={true} offset={-100} duration={500}>
                Platforms
              </Link>
            </li>
            <li>
              <Link href="/" smooth={true} offset={-50} duration={500}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} href="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            href="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            href="support"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Support
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            href="platforms"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Platforms
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            href="pricing"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Pricing
          </Link>
        </li>

        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
