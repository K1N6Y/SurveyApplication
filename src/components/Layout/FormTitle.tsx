import React from "react";

interface FormTitleProps {
  title: string;
  step: number;
  totalSteps: number;
}

const FormTitle: React.FC<FormTitleProps> = ({ title, step, totalSteps }) => {
  return (
    <>
      <div className="bg-dark text-white p-4 d-flex justify-content-between align-items-center">
        <h2 className="mb-0">{title}</h2>
        <h4 className="mb-0">
          {step}/{totalSteps}
        </h4>
      </div>
    </>
  );
};

export default FormTitle;
