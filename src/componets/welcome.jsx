import Quiz from "../img/quiz1.svg";

import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./welcome.css"

const welcome = () =>{
    const quizState = useContext(QuizContext);
    
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