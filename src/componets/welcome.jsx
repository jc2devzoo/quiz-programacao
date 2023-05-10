import Quiz from "../img/quiz1.svg";
import { createContext, useContext } from "react";
import "./welcome.css"
const welcome = () =>{
    const quizState = useContext;
    console.log(quizState)

    return (
        <div id="welcome">
            <h2 >Seja Bem vindo</h2>
            <p>Clique no botão abaixo para começar:</p>
            <button>Iniciar</button>
            <img src={Quiz} alt="Inicio do Quiz" />
        </div>
    )
};

export default welcome;