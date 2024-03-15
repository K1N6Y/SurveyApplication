import React from "react";

interface StroopQuestionProps {
  word: string;
  color: string;
  onOptionClick: (selectedWord: string) => void; // Change isCorrect to selectedWord
  onStartQuestion: () => void;
}

const StroopQuestion: React.FC<StroopQuestionProps> = ({
  word,
  color,
  onOptionClick,
}) => {
  const colorOptions = ["Red", "Blue", "Green", "Orange", "Purple"];

  const getRandomColor = () => {
    const availableColors = colorOptions.filter(
      (option) => option.toLowerCase() !== color.toLowerCase()
    );
    return availableColors[Math.floor(Math.random() * availableColors.length)];
  };

  const handleClick = (option: string) => {
    onOptionClick(option); // Pass the selected option to the parent component
  };

  const textColor = getRandomColor();

  return (
    <div className="stroopBox">
      <p style={{ color: textColor }}>{word}</p>
      <div className="buttonRow">
        {colorOptions.map((option, index) => (
          <button key={index} onClick={() => handleClick(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StroopQuestion;
