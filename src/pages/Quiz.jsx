import { useState } from "react";
import { QuizData } from "../data/QuizData";

const Error = () => (
  <div
    role="alert"
    className="flex items-center bg-red-100 border border-red-400 text-red-700 px-4 py-2 text-sm rounded relative mb-5"
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
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [showError, setShowError] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
    setShowError(false);
  };

  const handleNext = () => {
    if (!selectedAnswer) {
      setShowError(true);
      return;
    }

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);

    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(newAnswers[currentQuestion + 1] || "");
    } else {
      calculateScore(newAnswers);
      setQuizFinished(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || "");
    }
  };

  const calculateScore = (userAnswers) => {
    let newScore = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === QuizData[index].answer) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#EAEDE3] p-4">
      {!quizStarted ? (
        <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
          <h2 className="text-xl font-semibold mb-4 text-black">Are you ready to start the quiz?</h2>
          <button
            onClick={() => setQuizStarted(true)}
            className="bg-[#A4E56F] text-black py-2 px-6 rounded-lg font-medium cursor-pointer"
          >
            Ready
          </button>
        </div>
      ) : quizFinished ? (
        <div className="bg-white p-8 rounded-3xl text-black shadow-lg text-center w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Quiz Completed!</h2>
          <p className="text-lg font-medium">Your score: {score} / {QuizData.length}</p>
          <div className="mt-4 text-left">
            {QuizData.map((q, index) => (
              <div key={index} className="mb-3">
                <p className="font-medium">{q.question}</p>
                <p className={`text-sm ${answers[index] === q.answer ? "text-green-600" : "text-red-600"}`}>
                  Your Answer: {answers[index]} {answers[index] === q.answer ? "✅" : "❌"}
                </p>
                {answers[index] !== q.answer && (
                  <p className="text-sm text-gray-500">Correct Answer: {q.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="relative w-full max-w-md bg-white p-6 rounded-3xl shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-1">
              {QuizData.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 w-8 rounded-full ${
                    index <= currentQuestion ? "bg-black" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div>

          <p className="uppercase tracking-wide text-xs text-gray-500 font-semibold">
            Question {currentQuestion + 1}
          </p>
          <h2 className="text-lg font-semibold mb-4 text-black">
            {QuizData[currentQuestion].question}
          </h2>

          {showError && <Error />}

          <div className="space-y-2">
            {QuizData[currentQuestion].options.map((option, index) => (
              <label key={index} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={handleAnswerChange}
                  className="hidden peer"
                />
                <div className="w-5 h-5 border border-gray-400 rounded-full flex justify-center items-center peer-checked:border-black">
                  <div
                    className={`w-3 h-3 bg-black rounded-full ${
                      selectedAnswer === option ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                </div>
                <span className="font-medium text-black">{option}</span>
              </label>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={handleBack}
              disabled={currentQuestion === 0}
              className={`text-gray-500 font-medium ${
                currentQuestion === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="bg-[#A4E56F] text-black py-2 px-6 rounded-lg font-medium"
            >
              {currentQuestion === QuizData.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
