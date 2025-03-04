import {useState} from "react";

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

        const isCorrect = selectedAnswer === answers[currentQuestion].correct;
    }
    
    return(
        <></>
    )
}

export default Quiz;