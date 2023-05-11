import { Children, createContext } from "react";


const STAGES = ["Start","Playing","End"]

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    const value = {name:"quiz"}

    return <QuizContext.Provider value={value}>{Children}</QuizContext.Provider>
}