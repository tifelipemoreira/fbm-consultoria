import Heads from "../components/Heads/Heads";
import NavBar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import supportImg from "../../img/imgsite01.png";
import Image from "next/image";

// exemplos https://github.com/ndpniraj/react-ecom/tree/master/src/components
//https://github.com/Sridhar-C-25/reacttailwind_footer

//bom exemplo
// https://github.com/fireclint/cloud-app-react/
export default function Home() {
  return (
    <div>
      <Heads
        title="FBM Tecnologia - Home"
        name="home"
        content="Página Inicial"
        rel="ico"
        href="/favicon.ico"
      ></Heads>
      <NavBar></NavBar>
      <div className='w-full h-[100px]  absolute'>
        <Image className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" width={1536} height={775}/>
      </div>
      <div className="flex justify-center items-center w-full h-[770px] border-4 border-red-900">
        <div>
          <h1 className="text-center">
            Serviços de Criação de Sites<br></br>
            <p></p>
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-[770px] border-4 border-red-900">
        <div>
          <h1 className="text-center">
            Consultoria ERP<br></br>
            <p></p>
          </h1>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
