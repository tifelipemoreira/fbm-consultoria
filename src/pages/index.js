import Heads from "../components/Heads/Heads";
import NavBar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div >
      <Heads
        title="FBM Tecnologia - Home"
        name="home"
        content="Página Inicial"
        rel="ico"
        href="/favicon.ico"
      ></Heads>
        <NavBar></NavBar>
      <div className="flex justify-center items-center w-full h-96 border-4 border-red-900">
        <div>
          <h1 className="text-center">
            Serviços de Criação de Sites<br></br>
            <p></p>
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-96 border-4 border-red-900">
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
