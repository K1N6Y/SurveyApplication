import React from "react";

interface FormButtonProps {
  label: string;
  onClick: () => void;
}

const FormButton: React.FC<FormButtonProps> = ({ label, onClick }) => {
  return (
    <button type="button" className="btn btn-chemistry" onClick={onClick}>
      {label}
    </button>
  );
};

export default FormButton;
