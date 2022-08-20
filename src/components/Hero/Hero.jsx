import React from "react";
import {
  GlobeAltIcon,
  CodeIcon,
  CollectionIcon,
  DesktopComputerIcon,
} from "@heroicons/react/solid";

const Hero = () => {
  return (
    <div name="home" className="w-full h-[25rem] bg-fbmprimary justify-between ">
      <div className="max-w-[60rem] m-auto text-center flex ">
        <div className="flex flex-col w-full px-2 py-8 ">
          <h1 className="py-3 text-3xl md:text-6xl font-bold  text-center text-gray-300">
            Desenvolvimento e Consultorias em Sistemas
          </h1>
          <div className=" text-1xl font-bold md:text-[1.3rem] text-gray-500 ">
            <p className="">
              Oferecemos diversos serviços para você e sua empresa, de desenvolvimentos de sites 
            </p>
            <p>
              a integrações entre sistemas. Conheça os nossos Serviços.
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col py-4 md:min-w-[900px] 
          mx-1 md:left-1/2 bg-zinc-200
          border border-slate-300 rounded-xl text-center shadow-xl"
      >
        <p>TOTVS Protheus</p>
        <div className="flex justify-between flex-wrap px-4 ">
          <p className="flex px-4 py-2 text-slate-500 ">
            <CodeIcon className="h-6 text-indigo-600 pr-1 " /> Desenvolvimento de Sites
          </p>
          <p className="flex px-4 py-2 text-slate-500 ">
            <CodeIcon className="h-6 text-indigo-600 pr-1 " /> Integrações entre Sistemas Web
          </p>
          <p className="flex px-4 py-2 text-slate-500 ">
            <CodeIcon className="h-6 text-indigo-600 pr-1 " /> Desenvolvimento de Integrações API
          </p>
          <p className="flex px-4 py-2 text-slate-500 ">
            <CodeIcon className="h-6 text-indigo-600 pr-1 " /> Desenvolvimento ADVPL Protheus
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
