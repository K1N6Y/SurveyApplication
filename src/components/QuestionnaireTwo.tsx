import React, { useState } from "react";
import StroopQuestion from "./Interaction/StroopQuestion";
import FormTitle from "./Layout/FormTitle";
import FormButton from "./Layout/FormButton";

const words = ["Red", "Blue", "Green", "Orange", "Purple"];
const colorOptions = ["Red", "Blue", "Green", "Orange", "Purple"];

const getRandomIndex = (length: number) => Math.floor(Math.random() * length);
const getRandomColor = () =>
  colorOptions[Math.floor(Math.random() * colorOptions.length)];

interface Props {
  onComplete: (totalScore: number, avgResponseTime: number) => void;
}

const QuestionnaireTwo: React.FC<Props> = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responseTimes, setResponseTimes] = useState<number[]>([]);
  const [startTime, setStartTime] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [correctCount, setCorrectCount] = useState(1);
  const [testStarted, setTestStarted] = useState(false);
  const [currentColor, setCurrentColor] = useState("");

  const handleStartTest = () => {
    setCurrentQuestionIndex(getRandomIndex(words.length)); // Select the first question
    setCurrentColor(getRandomColor()); // Get initial color
    setStartTime(performance.now()); // Start the timer
    setTestStarted(true); // Mark the test as started
  };

  const handleOptionClick = (selectedWord: string) => {
    const endTime = performance.now();
    const responseTime = endTime - startTime;
    console.log("Time taken to answer:", responseTime, "ms");

    setResponseTimes((prevTimes) => [...prevTimes, responseTime]);

    const displayedColor = currentColor;
    if (selectedWord === displayedColor) {
      setCorrectCount((prevCount) => prevCount + 1);
      console.log("Correct! The displayed color was:", displayedColor);
    } else {
      console.log(
        "InCorrect! The displayed color was:",
        displayedColor,
        "You chose:",
        selectedWord
      );
    }

    if (answeredQuestions < 19) {
      setAnsweredQuestions((prevCount) => prevCount + 1);
      setCurrentQuestionIndex(getRandomIndex(words.length)); // Select a random question
      setStartTime(performance.now()); // Start timing for the next question
      setCurrentColor(getRandomColor()); // Get a new color
    } else {
      // Calculate average response time
      const totalResponseTime = responseTimes.reduce(
        (acc, time) => acc + time,
        0
      );
      const avgResponseTime = totalResponseTime / responseTimes.length;

      onComplete(correctCount, avgResponseTime); // Signal completion with total score and average response time
    }
  };

  return (
    <>
      <FormTitle title="Stroop Test" step={4} totalSteps={6} />
      <div className="p-4 text-center bg-light">
        {!testStarted ? (
          <>
            <p>
              This is a short cognitive task called a “Stroop test”. During the
              Stroop test, you will be shown a word which may or may not be
              presented in the same colour, after being shown this word for a
              brief period, the word will disappear, and you will be prompted to
              answer what colour the last word presented was. Please note that
              making mistakes is very common and expected. Your reaction time
              and accuracy will be recorded automatically.
            </p>
            <p>
              <strong>
                The timer will start as soon as the button is pressed.
              </strong>
            </p>
            <FormButton onClick={handleStartTest} label="Start Test" />
          </>
        ) : (
          <>
            {answeredQuestions < 20 ? (
              <StroopQuestion
                word={words[currentQuestionIndex]}
                textColor={currentColor}
                onOptionClick={handleOptionClick}
                onStartQuestion={() => setStartTime(performance.now())} // Start timing for the first
              />
            ) : (
              <div>
                <h3>Average Response Time</h3>
                <p>
                  {responseTimes.length > 0
                    ? `${(
                        responseTimes.reduce((acc, time) => acc + time, 0) /
                        responseTimes.length
                      ).toFixed(2)} ms`
                    : "No data"}
                </p>
                <p>Correct answers: {correctCount} / 10</p>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default QuestionnaireTwo;
