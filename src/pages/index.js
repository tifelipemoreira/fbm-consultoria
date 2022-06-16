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
            Tecnologia Ganha Cada dia mais espaço<br></br>
            <p>Acompanhar esse movimento passou a ser obrigatório</p>
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-96 border-4 border-red-900">
        <div>
          <h1 className="text-center">
            Tecnologia Ganha Cada dia mais espaço<br></br>
            <p>Acompanhar esse movimento passou a ser obrigatório</p>
          </h1>
        </div>
      </div>
        <Footer></Footer>
    </div>
  );
}
