import Item from "./Item";
import { SERVICOS,SOBRE,PORTIFOLIO,CONTATOS } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={SERVICOS} title="SERVIÇOS" />
      <Item Links={SOBRE} title="SOBRE" />
      <Item Links={PORTIFOLIO} title="PORTIFOLIO" />
      <Item Links={CONTATOS} title="CONTATOS" />
    </div>
  );
};

export default ItemsContainer;