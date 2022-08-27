import React from "react";
import {
  CodeIcon
} from "@heroicons/react/solid";

const HomePage = () => {
  return (
    <div name="home" className="w-full h-[30rem] bg-fbmprimary justify-between ">
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
        className="flex flex-col py-12 md:min-w-[50rem] mx-1 md:left-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl" >
        <p>Melhore seus resultados</p>
        <div className="h-full w-full">
        <div className="flex md:justify-between justify-center md:flex-row flex-col flex-wrap items-baseline px-4 ">
          <p className="flex px-4 py-2 text-slate-500 ">
            <CodeIcon className="h-8 text-fbmsecondary pr-1 " /> Melhoria de Processos
          </p>
          <p className="flex px-4 py-2 text-slate-500 ">
            <CodeIcon className="h-8 text-fbmsecondary pr-1 " /> Crescimento
          </p>
          <p className="flex px-4 py-2 text-slate-500 ">
            <CodeIcon className="h-8 text-fbmsecondary pr-1 " />  Visibilidade
          </p>
          <p className="flex px-4 py-2 text-slate-500 ">
            <CodeIcon className="h-8 text-fbmsecondary pr-1 " /> Economia
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
