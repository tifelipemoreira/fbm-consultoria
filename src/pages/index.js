import Heads from "../components/Heads/Heads";
import NavBar from "../components/NavBar/Navbar";

export default function Home() {
  return (
    <div className="">
      <Heads
        title="FBM Tecnologia - Home"
        name="home"
        content="Página Inicial"
        rel="ico"
        href="/favicon.ico"
      ></Heads>
      <NavBar></NavBar>
    </div>
  );
}
