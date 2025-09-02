import "./App.css";
import icon from "./Imagens/icon.png";
import Contatos from "./componentes/buttons";
import TextoSobreMim, { DivCarrosel } from "./componentes/MenuInicial";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="DivIncio">
          <TextoSobreMim></TextoSobreMim>
          <DivCarrosel></DivCarrosel>
          <img src={icon} className={`IconePrincipal`} alt={""} />
        </div>

        <div className="DivContatos">
          <Contatos
            link={"https://www.linkedin.com/in/ygor-jivago-1223252ba"}
            Rede={"Linkedin"}
          ></Contatos>
          <Contatos
            link={"https://github.com/ylapiy"}
            Rede={"GitHub"}
          ></Contatos>
          <Contatos
            link={"https://wa.me/+558694822455"}
            Rede={"WhatsApp"}
          ></Contatos>
        </div>
      </header>
    </div>
  );
}

export default App;
