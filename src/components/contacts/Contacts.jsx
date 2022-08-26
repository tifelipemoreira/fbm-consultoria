import React from "react";
import { WhatsApp } from "../../assets/icons";
import Link from "next/link";
const Contacts = () => {
  return (
    <div
      name={"Contacts"}
      className=" w-full h-[35rem] flex flex-col items-center "
    >
      <div className=" mb-2 w-full h-40 flex flex-col items-center ">
        <p className="p-2 text-fbmsecondary text-xl">
          Se interessou nos nossos serviços?
        </p>
        <p className="pb-2 text-fbmsecondary text-lg flex flex-col items-center">
          {" "}
          Entre em Contato em nosso
          <Link href="https://api.whatsapp.com/send?phone=5562982575695">
            <a className="underline pl-2 pr-4 text-green-600 " target="_blank ">
              <p className="flex flex-row p-2 text-2xl">
                WhatsApp{" "}
                <span className="pl-2">
                  <WhatsApp></WhatsApp>
                </span>
              </p>
            </a>
          </Link>
        </p>
      </div>
      <div className="border-2 border-black md:w-[40rem] w-96 h-96">
        <p className="p-2 "> Ou deixe seu recado</p>
        <form className="">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            type="username"
          >
            Username
          </label>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
{
  /**
 <>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" type="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" type="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
    </>
*/
}
