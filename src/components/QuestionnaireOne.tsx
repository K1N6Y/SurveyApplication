import React, { useState } from "react";
import QuestionnaireOneButton from "./Interaction/QuestionaireOneButton";
import FormTitle from "./Layout/FormTitle";
import FormButton from "./Layout/FormButton";

const questions = [
  "1. How often do you have troubles wrapping up the final details of a project once the challenging parts have been done?",
  "2. How often do you have difficulty getting things in order when you have to do a task that requires organisation?",
  "3. How often do you have problems remembering appointments or obligations?",
  "4. When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
  "5. How often do you fidget or squirm with your hands or feet when you have to sit down for a long period of time?",
  "6. How often do you feel overly active and compelled to do things, like you were driven by a motor?",
  "7. How often do you make careless mistakes when you have to work on a boring or difficult project?",
  "8. How often do you have difficulty keeping your attention when you are doing boring or repetitive work?",
  "9. How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?",
  "10. How often do you misplace or have difficulty finding things at home or at work?",
  "11. How often are you distracted by activity or noise around you?",
  "12. How often do you leave your seat in meetings or other situations in which you are expected to remain seated?",
  "13. How often do you feel restless or fidgety?",
  "14. How often do you have difficulty unwinding and relaxing when you have time to yourself?",
  "15. How often do you find yourself talking too much when you are in social situations?",
  "16. When you're in a conversation, how often do you find yourself finishing the sentences of the people you are talking too, before they can finish them themselves?",
  "17. How often do you have difficulty waiting your turn in situations when turn taking is required?",
  "18. How often do you interrupt others when they are busy",
];

const QuestionnaireOne: React.FC<{ onComplete: (score: number) => void }> = ({
  onComplete,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<number[]>(
    Array(questions.length).fill(-1)
  );
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);

  const handleResponse = (value: number, index: number) => {
    setResponses((prevResponses) => {
      const newResponses = [...prevResponses];
      newResponses[currentQuestionIndex] = value;
      return newResponses;
    });
    setSelectedOptionIndex(index);
  };

  const handleNextQuestion = () => {
    if (selectedOptionIndex !== -1) {
      setSelectedOptionIndex(-1);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        // Calculate score when all questions are answered
        const calculatedScore = responses.reduce(
          (acc, response) => acc + response,
          0
        );
        onComplete(calculatedScore); // Signal completion with the calculated score
      }
    } else {
      alert("Please answer the question before proceeding.");
    }
  };

  return (
    <>
      <FormTitle title="Questionnaire" step={3} totalSteps={6} />
      <div className="p-4 bg-light text-center">
        <p className="questionProgress mb-1">
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>
        <h3 className="currentQuestion mb-4">
          {questions[currentQuestionIndex]}
        </h3>
        <div className="buttonRow mb-4">
          {["Never", "Rarely", "Sometimes", "Often", "Very Often"].map(
            (option, index) => (
              <QuestionnaireOneButton
                key={option}
                text={option}
                onClick={(value) => handleResponse(value, index)}
                value={index}
                isSelected={selectedOptionIndex === index}
              />
            )
          )}
        </div>
        <FormButton label="Next Question" onClick={handleNextQuestion} />
      </div>
    </>
  );
};

export default QuestionnaireOne;
