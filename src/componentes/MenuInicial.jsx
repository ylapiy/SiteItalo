import "../App.css";
import css from "../Imagens/css-3.png";
import html from "../Imagens/html.png";
import java from "../Imagens/java.png";
import js from "../Imagens/js.png";
import mysql from "../Imagens/mysql.png";
import nodejs from "../Imagens/nodejs.png";
import postgre from "../Imagens/postgre.png";
import python from "../Imagens/python.png";

function DivCarrosel() {
  const ArrayImagens = [
    css,
    html,
    java,
    js,
    mysql,
    nodejs,
    postgre,
    python,
  ];

  return (
    <div className="Wrapper">
      {ArrayImagens.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          className={`PngWrapper PngWrapper${index + 1}`}
        />
      ))}
    </div>
  );
}

function TextoSobreMim() {
  return (
    <div className="DivSobreMim">
      <h2>Ola! Sou Ygor Jivago Leal Félix</h2>
      <h3>Estudante de Engenharia de Software - ICEV</h3>

      <p>*Em busca de aprimoramento na área de desenvolvimento de software e TI.</p>
      <p>*Tenho especial interesse na área de desenvolvimento de jogos</p>
    </div>
  );
}


export { DivCarrosel };

export default TextoSobreMim;
