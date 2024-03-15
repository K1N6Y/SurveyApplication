import React from "react";

interface QuestionnaireOneButtonProps {
  text: string;
  onClick: (value: number) => void;
  value: number;
  isSelected: boolean; // New prop to indicate whether the button is selected
}

const QuestionnaireOneButton: React.FC<QuestionnaireOneButtonProps> = ({
  text,
  onClick,
  value,
  isSelected,
}) => {
  return (
    <button
      onClick={() => onClick(value)}
      style={{
        backgroundColor: isSelected ? "white" : "white",
        border: isSelected ? "2px solid #FED203" : "none",
      }}
    >
      {text}
    </button>
  );
};

export default QuestionnaireOneButton;
