import React from "react";
import {
 GlobeAltIcon,
 CodeIcon,
 CollectionIcon,
 DesktopComputerIcon
} from "@heroicons/react/solid";
import Image from "next/image";
import bgImg from "../../assets/process.png";
const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between "
    >
      <div className="grid md:grid-cols-2 max-w-[1280px] m-auto ">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 ">
          <h1 className="py-3 text-5xl md:text-7xl font-bold  text-center">
            Consultoria TOTVS® Protheus
          </h1>
        </div>
        <div className="mr-22 ">
          <Image className="w-full " src={bgImg} alt="Logo" />
        </div>
        
      </div>
      <div
          className=" absolute flex flex-col py-4 md:min-w-[900px]  bottom-[-108px]
          mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
          border border-slate-300 rounded-xl text-center shadow-xl"
        >
          <p>TOTVS Protheus</p>
          <div className="flex justify-between flex-wrap px-4 ">
            <p className="flex px-4 py-2 text-slate-500 ">
              <CodeIcon className="h-6 text-indigo-600 pr-1 " /> Desenvolvimento ADVPL
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <CollectionIcon className="h-6 text-indigo-600 pr-1" /> Melhoria de Processos
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <GlobeAltIcon className="h-6 text-indigo-600 pr-1" /> Integrações API
            </p>
            <p className="flex px-4 py-2 text-slate-500 pr-1">
              <DesktopComputerIcon className="h-6 text-indigo-600" /> Suporte
            </p>
          </div>
        </div>
    </div>
  );
};

export default Hero;
