import React from "react";
import Link from "next/link";

import Image from "next/image";
import logo from "../../../public/logo.png";
import SocialIcons from "./SocialIcons";

import { Icons } from "./Menus";

const Footer = () => {
  return (
    <footer name="Footer"  className=" w-full h-48 bg-fbmprimary">
      <div className="flex justify-center pt-6">
        <SocialIcons Icons={Icons} />
      </div>
      <div className="flex justify-center">
        <ul className="flex flex-row justify-around p-6  w-[28rem] text-2xl text-gray-400">
        <li><Link className="" href="#Home">Home</Link></li>
        <li><Link className="" href="#Servicos">Serviços</Link></li>
        <li><Link className="" href="#Contatos">Contatos</Link></li>
        </ul>
      </div>
      <div className="flex justify-center text-fbmsecondary ">
        <span >FBM Tecnologia © 2022 Appy. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
