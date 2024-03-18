import React from "react";
import FormTitle from "./Layout/FormTitle";
import { saveSurveyDataToFirestore } from "../firebase"; // Import the function to save data
import FormButton from "./Layout/FormButton";

interface FinalPageProps {
  userData: any;
  questionnaireOneScore: number;
  questionnaireTwoScore: number;
  questionnaireTwoAvgTime: number;
  onComplete: () => void;
}

const FinalPage: React.FC<FinalPageProps> = ({
  userData,
  questionnaireOneScore,
  questionnaireTwoScore,
  questionnaireTwoAvgTime,
  onComplete,
}) => {
  // Function to handle completion and saving survey data
  const handleComplete = () => {
    // Save survey data to Firestore
    saveSurveyDataToFirestore({
      userData,
      questionnaireOneScore,
      questionnaireTwoScore,
      questionnaireTwoAvgTime,
    });

    // Call the completion callback
    onComplete();
  };

  return (
    <>
      <FormTitle title="Final Page" step={5} totalSteps={6} />
      <div className="p-4 bg-light">
        <h3>User Data</h3>
        <p>
          Gender: <span className="finalResult">{userData.gender}</span>
        </p>
        <p>
          Assigned Gender at Birth:{" "}
          <span className="finalResult">{userData.assignedGender}</span>
        </p>
        <p>Age: {userData.age}</p>
        <h3>Questionnaire Results</h3>
        <p>
          Questionnaire One: <strong>{questionnaireOneScore}</strong> / 72
        </p>
        <h3>Stroop Test Results</h3>
        <p>
          Questionnaire Two Score: <strong>{questionnaireTwoScore}</strong> / 20
        </p>
        <p>
          Average Response Time: <strong>{questionnaireTwoAvgTime}</strong> ms
        </p>
        <p>Please click the button below to submit your results.</p>
        <FormButton label="Submit Results" onClick={handleComplete} />
      </div>
    </>
  );
};

export default FinalPage;
