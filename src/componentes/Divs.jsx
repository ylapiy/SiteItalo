import "../App.css";
import css from "../Imagens/css-3.png";
import html from "../Imagens/html.png";
import java from "../Imagens/java.png";
import js from "../Imagens/js.png";
import mysql from "../Imagens/mysql.png";
import nodejs from "../Imagens/nodejs.png";
import postgre from "../Imagens/postgre.png";
import python from "../Imagens/python.png";

function DivCarrosel(){

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

    return <div className="Wrapper">
            <img src={ArrayImagens[0]} alt="" className="PngWrapper PngWrapper1" />
            <img src={ArrayImagens[1]} alt="" className="PngWrapper PngWrapper2" />
            <img src={ArrayImagens[2]} alt="" className="PngWrapper PngWrapper3" />
            <img src={ArrayImagens[3]} alt="" className="PngWrapper PngWrapper4" />
            <img src={ArrayImagens[4]} alt="" className="PngWrapper PngWrapper5" />
            <img src={ArrayImagens[5]} alt="" className="PngWrapper PngWrapper6" />
            <img src={ArrayImagens[6]} alt="" className="PngWrapper PngWrapper7" />
            <img src={ArrayImagens[7]} alt="" className="PngWrapper PngWrapper8" />
        </div>


}

export default DivCarrosel