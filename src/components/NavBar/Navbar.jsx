import { useState } from "react"; // import state
import { HiOutlineMenu } from "react-icons/hi";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";
export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  return (
    <>
      <nav className="flex  bg-gradient-to-r from-fbmprimary via-blue-900  to-transparent ">
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
          <ul className=" hidden lg:flex items-center text-gray-900 font-bold text-center">
            <li className="p-5   mr-10 w-28  ">
            <Link className="" href="#Home" >Home</Link>
            </li>
            <li className="p-5   mr-10  w-28 ">
            <Link className="" href="#Servicos">Serviços</Link>
            </li>
            <li className="p-5   mr-10 w-28  ">
            <Link className="" href="#Contatos">Contatos</Link>
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
              ? "hidden"
              : "lg:hidden h-60  w-full bg-fbmprimary rounded-md  absolute flex justify-center items-center "
          }
        >
          <ul  className=" p-5 text-gray-400 text-2xl " onClick={() => setIsNavOpen((isNavOpen) => !isNavOpen)}>
            <li className="hover:underline rounded-md text-center w-full p-2 m-1  ">
            <Link className="" href="#Home" >Home</Link>
            </li>
            <li className="hover:underline rounded-md text-center w-full p-2 m-1 ">
            <Link className="" href="#Servicos">Serviços</Link>
            </li>
            <li className="hover:underline rounded-md text-center w-full p-2 m-1">
            <Link className="" href="#Contatos">Contatos</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
