import {useState} from "react";
import { question } from "../data/QuizData";

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [showResults, setShowResults] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showError, setShowError] = useState(false);

    const handleAnswerChange = (event) => {
        setSelectedAnswer(event.target.value);
        setShowError(false);
    }

    const handleNext = () => {
        if(!selectedAnswer){
            setShowError(true);
            return;
        }

        const isCorrect = selectedAnswer === question[currentQuestion].correct;
        if(isCorrect) setCorrectAnswers(correctAnswers + 1);

        setAnswers([...answers, selectedAnswer]);

        if(currentQuestion < question.length - 1){
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer("");
        }else{
            setShowResults(true);
        }
    }

    const handleRetry = () => {
        setCurrentQuestion(0);
        setSelectedAnswer("");
        setShowResults(false);
        setCorrectAnswers(0);
        setAnswers([]);
        setShowError(false);
    }
    
    return(
        <></>
    )
}

export default Quiz;