import "./App.css";
import Contatos from "./componentes/buttons";
import DivCarrosel from "./componentes/Divs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DivCarrosel></DivCarrosel>

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
