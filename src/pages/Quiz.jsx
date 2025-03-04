import { useState } from "react";
import { QuizData } from "../data/QuizData";

const Error = () => (
  <div
    role="alert"
    className="flex items-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-5"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 shrink-0 stroke-current"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <span className="ml-3">Please select an option before proceeding.</span>
  </div>
);
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
  };

  const handleNext = () => {
    if (!selectedAnswer) {
      setShowError(true);
      return;
    }

    const isCorrect =
      selectedAnswer === QuizData[currentQuestion].correctAnswer;
    if (isCorrect) setCorrectAnswers(correctAnswers + 1);

    setAnswers([...answers, selectedAnswer]);

    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setShowResults(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setShowResults(false);
    setCorrectAnswers(0);
    setAnswers([]);
    setShowError(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-300 p-4">
      <div className="w-full max-w-4xl bg-base-100 p-6 rounded-lg shadow-lg text-left mb-10">
        {!showResults ? (
          <>
            <p className="uppercase tracking-tighter text-black">
                Question {currentQuestion + 1}/{QuizData.length}</p>
            <h2 className="text-2xl font-semibold mb-10 text-black">
              {QuizData[currentQuestion].question}
            </h2>

            {showError && <Error />}
            <div className="space-y-4">
              {QuizData[currentQuestion].options.map((option, index) => (
                <label
                  key={index}
                  className={`flex items-center space-x-3 cursor-pointer ${selectedAnswer === option ? "animate-bounce" : ""}`}
                >
                  <input
                    type="radio"
                    name="answer"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={handleAnswerChange}
                    className="hidden peer"
                  />
                  <div className="w-5 h-5 border border-gray-300 rounded-full flex justify-center items-center peer-checked:bg-light-red peer-checked:border-light-red">
                    <span className="w-3 h-3 bg-white rounded-full"></span>
                  </div>
                  <span className="font-semibold text-black peer-checked-light-red text-sm md:text-lg">
                    {option}
                  </span>
                </label>
              ))}
            </div>
            <button
              onClick={handleNext}
              className="mt-6 bg-dark-red text-white py-2 px-4 rounded-lg w-full cursor-pointer"
            >
              {currentQuestion === QuizData.length - 1 ? "Finish" : "Next"}
            </button>
          </>
        ) : (
          <div className="p-3">
            <p className="mb-6 text-xl mt-10 text-black">
              You got {correctAnswers} out of {QuizData.length} questions right
            </p>
            <h3 className="text-xl font-semibold mb-2 text-black">
              Review Answers:
            </h3>
            <ul className="mb-6 space-y-4 dark:text-white text-black">
              {QuizData.map((question, index) => (
                <li key={index} className="text-left">
                  <p className="text-black">{question.question}</p>
                  <p className="text-black">
                    Your answer:{" "}
                    <span
                      className={`font-semibold ${
                        answers[index] === question.correctAnswer
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {answers[index]}
                    </span>
                  </p>
                  {answers[index] !== question.correctAnswer && (
                    <p className="text-black">
                      Correct answer: {question.correctAnswer}
                    </p>
                  )}
                </li>
              ))}
            </ul>
            <button
              onClick={handleRetry}
              className="bg-dark-red dark:bg-hero text-white py-2 px-4 rounded-lg font-medium w-full"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
