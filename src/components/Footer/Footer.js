import { useState } from "react"; // import state
import { GrInstagram, GrLinkedin } from "react-icons/gr";
export default function Footer() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  console.log(isNavOpen);
  return (
    <>
      <footer className="relative bg-gray-200">
        <div className="flex justify-center">
          <a className="m-2 mr-6"
            href="https://www.instagram.com/tifelipemoreira/" target={"_blank"} rel="noreferrer noopener"
          >
            <GrInstagram className="h-10 w-10 "></GrInstagram>
          </a>
          <a className="m-2 ml-6"
            href="https://www.linkedin.com/in/tifelipemoreira/" target={"_blank"} rel="noreferrer noopener"
          >
            <GrLinkedin className="h-10 w-10 "></GrLinkedin>
          </a>
        </div>
        <div className="flex justify-center ">
          <span>Desenvolvido por FBM Tecnologia @ 2022</span>
        </div>
      </footer>
    </>
  );
}
