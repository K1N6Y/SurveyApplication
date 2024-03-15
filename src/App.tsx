import React, { useState } from "react";
import UserDataForm from "./components/UserDataForm";
import QuestionnaireOne from "./components/QuestionnaireOne";
import QuestionnaireTwo from "./components/QuestionnaireTwo";
import FinalPage from "./components/FinalPage";
import ThankYou from "./components/ThankYou";
import ChemLogo from "./chem_logo.svg";
import Briefing from "./components/Briefing";

const App: React.FC = () => {
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState<any>({});
  const [questionnaireOneScore, setQuestionnaireOneScore] = useState<number>(0);
  const [questionnaireTwoScore, setQuestionnaireTwoScore] = useState<number>(0);
  const [questionnaireTwoAvgTime, setQuestionnaireTwoAvgTime] =
    useState<number>(0);

  const handleStepCompletion = (
    data: any,
    score?: number,
    correctCount?: number,
    avgResponseTime?: number
  ) => {
    setUserData((prevUserData: any) => ({ ...prevUserData, ...data }));

    setStep((prevStep) => prevStep + 1);

    if (score !== undefined) setQuestionnaireOneScore(score);
    if (correctCount !== undefined) setQuestionnaireTwoScore(correctCount);
    if (avgResponseTime !== undefined)
      setQuestionnaireTwoAvgTime(avgResponseTime);
  };

  const handleStartSurvey = () => {
    setStep(1);
  };

  return (
    <>
      <img src={ChemLogo} alt="Chem Logo" className="chem-logo" />

      <div className="appBg d-flex align-items-center justify-content-center py-5">
        <div className="container">
          <div className="rounded shadow">
            {step === 0 && <Briefing onNext={handleStartSurvey} />}
            {step === 1 && (
              <UserDataForm onSubmit={(data) => handleStepCompletion(data)} />
            )}
            {step === 2 && (
              <QuestionnaireOne
                onComplete={(score) => handleStepCompletion({}, score)}
              />
            )}
            {step === 3 && (
              <QuestionnaireTwo
                onComplete={(correctCount, avgResponseTime) =>
                  handleStepCompletion(
                    {},
                    undefined,
                    correctCount,
                    avgResponseTime
                  )
                }
              />
            )}
            {step === 4 && (
              <FinalPage
                userData={userData}
                questionnaireOneScore={questionnaireOneScore}
                questionnaireTwoScore={questionnaireTwoScore}
                questionnaireTwoAvgTime={questionnaireTwoAvgTime}
                onComplete={() => setStep(step + 1)}
              />
            )}
            {step === 5 && <ThankYou />}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
