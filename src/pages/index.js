import Heads from "../components/Heads/Heads";
import NavBar from "../components/NavBar/Navbar";

export default function Home() {
  return (
    <div>
      <Heads
        title="testes"
        name="home"
        content="Página Inicial"
        rel="ico"
        href="/favicon.ico"
      ></Heads>
      <NavBar pgAtual="home"></NavBar>
      <div className="bg-gray-900 w-full">teste2</div>
    </div>
  );
}
