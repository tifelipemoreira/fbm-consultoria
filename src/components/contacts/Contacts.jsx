import React from "react";
import { WhatsApp } from "../../assets/icons";
import Link from "next/link";
import { useState } from "react"; // import state

const Contacts = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const onChangeHandle = async () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    //console.log(event.target);
    // Get data from the form.
    const data = {
      nome: event.target.nome.value,
      email: event.target.email.value,
      telefone: event.target.telefone.value,
      checkbox: isChecked,
    };
    //console.log(isChecked);
    //console.log(data);

    setIsChecked(!isChecked);
    setIsSubmit(!isSubmit);
  };
  return (
    <div
      name={"Contatos"}
      className=" w-full h-[39rem] flex flex-col items-center"
    >
      <div className=" mb-2 w-full h-40 flex flex-col items-center ">
        <p className="p-2 text-fbmsecondary text-2xl">
          Se interessou nos nossos serviços?
        </p>
        <p className="pb-2 text-fbmsecondary  flex flex-col items-center text-2xl">
          {" "}
          Entre em Contato em nosso
          <Link href="https://api.whatsapp.com/send?phone=5562982575695">
            <a
              className="underline pl-2 pr-4 text-fbmsecondary p-2 text-2xl"
              target="_blank "
            >
              <span className="pl-2 flex flex-row">
                <span className="pr-2"> WhatsApp </span>{" "}
                <span className="">
                  <WhatsApp></WhatsApp>
                </span>
              </span>
            </a>
          </Link>
        </p>
        <p className="text-fbmsecondary font-bold  mb-1 md:mb-0  text-xl pb-2 pt-6 ">
          Se preferir, nós entramos em contato!
        </p>
        <div>
          {isSubmit ? (
            <p className="text-fbmsecondary font-bold  mb-1 md:mb-0 text-center text-xl pb-2 pt-48 ">
              Obrigado! Em Breve entraremos em contato.
            </p>
          ) : (
            <form
              onSubmitCapture={handleSubmit}
              className="pt-4 w-[22rem] md:w-full max-w-xl "
            >
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Nome
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    required
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="nome"
                    type="text"
                    name="nome"
                    placeholder="Nome Completo"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    E-mail
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    required
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="email@email.com"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Telefone
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    required
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="telefone"
                    name="telefone"
                    type="tel"
                    placeholder="Telefone"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3"></div>
                <label className="md:w-2/3 block text-gray-500 font-bold">
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    id="checkbox"
                    name="checkbox"
                    checked={isChecked}
                    onChange={onChangeHandle}
                  />
                  <span className="text-sm">
                    Aceito receber mensagens de FBM Tecnologia.
                  </span>
                </label>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                  <button
                    className="shadow bg-fbmsecondary hover:bg-fbmprimary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
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
