import { useState } from "react"; // import state
import { HiOutlineMenu } from "react-icons/hi";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";
export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  return (
    <>
      <nav className="flex  bg-gradient-to-r from-fbmprimary ">
        {/* Logo */}
        <div className="flex justify-start items-center w-full h-28 ml-3">
          <Image 
            src={logo}
            alt="Logo"
            width={175}
            height={60}
          />
        </div>
        {/* menu desktop */}
        <div className="flex ">
          <ul className=" hidden lg:flex items-center">
            <li className="p-5  text-black font-bold text-center mr-10 w-28  ">
              <Link className="" href="#Home"  smooth={true} duration={500}>Home</Link>
            </li>
            <li className="p-5  text-black font-bold text-center mr-10  w-28 ">
              <a href="#Servicos">Serviços</a>
            </li>
            <li className="p-5  text-black font-bold text-center mr-10 w-28  ">
              <a href="#Portifolio">Portifólio</a>
            </li>
            <li className="p-5  text-black font-bold text-center mr-10 w-28  ">
              <a href="#Contatos">Contatos</a>
            </li>
          </ul>
        </div>
        {/* menu mobile  */}

        <div
          className="lg:hidden flex justify-center items-center p-6  "
          onClick={() => setIsNavOpen((isNavOpen) => !isNavOpen)}
        >
          <HiOutlineMenu className="h-10 w-10 " color="black"></HiOutlineMenu>
        </div>
      </nav>
      {/* menu mobile aberto */}
      <div className="flex justify-end  ">
        <div
          className={
            isNavOpen
              ? "hidden "
              : "lg:hidden  w-full bg-fbmprimary rounded-md  absolute flex justify-center  "
          }
        >
          <ul className=" p-5 text-white text-2xl ">
            <li className="hover:underline rounded-md text-center w-full p-2 m-1  ">
              <a href="#Home">Home</a>
            </li>
            <li className="hover:underline rounded-md text-center w-full p-2 m-1 ">
              <a href="#Servicos">Serviços</a>
            </li>
            <li className="hover:underline rounded-md text-center w-full p-2 m-1">
              <a href="#Portifólio">Portifólio</a>
            </li>
            <li className="hover:underline rounded-md text-center w-full p-2 m-1 ">
              <a href="#Contatos">Contatos</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
