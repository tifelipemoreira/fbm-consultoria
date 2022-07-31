import { useState } from "react"; // import state
import { GrInstagram, GrLinkedin } from "react-icons/gr";
export default function Footer() {
  return (
    <>
      <footer className="relative bg-fbmprimary ">
        <div className="flex justify-center">
          <a className="m-2 mr-6"
            href="https://www.instagram.com/tifelipemoreira/" target={"_blank"} rel="noreferrer noopener"
          >
            <GrInstagram className="h-10 w-10 bg-white "></GrInstagram>
          </a>
          <a className="m-2 ml-6"
            href="https://www.linkedin.com/in/tifelipemoreira/" target={"_blank"} rel="noreferrer noopener"
          >
            <GrLinkedin className="h-10 w-10 bg-white "></GrLinkedin>
          </a>
        </div>
        <div className="flex justify-center text-white">
          <span>Desenvolvido por FBM Tecnologia @ 2022</span>
        </div>
      </footer>
    </>
  );
}
