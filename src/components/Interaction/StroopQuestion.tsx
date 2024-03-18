import React from "react";

interface StroopQuestionProps {
  word: string;
  textColor: string; // New prop to pass the color
  onOptionClick: (selectedWord: string) => void;
  onStartQuestion: () => void;
}

const StroopQuestion: React.FC<StroopQuestionProps> = ({
  word,
  textColor,
  onOptionClick,
}) => {
  const colorOptions = ["Red", "Blue", "Green", "Orange", "Purple"];

  const handleClick = (option: string) => {
    onOptionClick(option);
  };

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
