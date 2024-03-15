import React from "react";
import FormButton from "./Layout/FormButton";
import FormTitle from "./Layout/FormTitle";

interface BriefingProps {
  onNext: () => void;
}

const Briefing: React.FC<BriefingProps> = ({ onNext }) => {
  return (
    <>
      <FormTitle title="Briefing" step={1} totalSteps={6} />
      <div className="p-4 bg-light">
        <h2>Participant Information Sheet</h2>
        <hr />
        <p>
          You are being invited to take part in this research study. Before you
          decide it is important for you to read this information so you
          understand why the study is being carried out and what it will
          involve.
        </p>
        <p>
          Reading this information, discussing it with others or asking any
          questions you might have will help you decide whether or not you would
          like to take part.
        </p>
        <h3>What is the purpose of the study?</h3>
        <p>
          The purpose of this study is to examine and evaluate the link between
          ADHD-like traits and executive functioning. You do not need to have an
          ADHD diagnosis to take part as this is not considered within the
          study.
        </p>
        <h3>Why have I been invited to take part?</h3>
        <p>
          You have been invited to take part as you meet the following criteria:
        </p>
        <ul>
          <li>Over the age of 18</li>
        </ul>
        <h3>Do I have to take part?</h3>
        <p>
          You are under no obligation to take part and you will not experience
          any loss of benefit or penalty if you choose not to participate.
        </p>
        <h3>What will I have to do?</h3>
        <p>
          First you will be asked to give your age and gender and then asked to
          complete a 15-part questionnaire about symptoms that are commonly
          found in ADHD, this will not provide an ADHD diagnosis. This section
          will take around 5 minutes to complete and is followed by a short
          cognitive task called a “Stroop test”. During the Stroop test, you
          will be shown a word which may or may not be presented in the same
          colour, after being shown this word for a brief period, the word will
          disappear, and you will be prompted to answer what colour the last
          word presented was. Please note that making mistakes is very common
          and expected. Your reaction time and accuracy will be recorded
          automatically.
        </p>
        <h3>
          What are the exclusion criteria (i.e. are there any reasons why I
          should not take part)?
        </h3>
        <p>You should not take part in this study if:</p>
        <ul>
          <li>You are under 18 years old</li>
        </ul>
        <h3>What are the possible disadvantages/risks in taking part?</h3>
        <p>
          The test should not cause any distress however if it does you will
          have the full right to withdraw and there is support offered at the
          ADHD foundation{" "}
          <a href="https://www.adhdfoundation.org.uk">
            https://www.adhdfoundation.org.uk
          </a>
        </p>
        <h3>Will my taking part be kept confidential and anonymous?</h3>
        <p>
          Yes, there will not be any identifiable information collected and any
          electronic information will be stored on a password protected
          computer. This will be kept separate from any data and will be treated
          in accordance with GDPR.
        </p>
        <h3>How will my data be stored?</h3>
        <p>
          All data will be stored on password protected files within the
          university network.
        </p>
        <h3>What will happen to the results of the study?</h3>
        <p>
          The results will be used for an undergraduate dissertation that will
          be examined as part of a BSc Psychology degree. Occasionally some
          results might be presented at a conference or published in a journal,
          but they will always remain anonymous. All information and data
          gathered during this research will be stored in line with the Data
          Protection Act and in line with Open Data policies, deidentified data
          may be held indefinitely, but at no point will your personal
          information or data be revealed.
        </p>
        <h3>Who is funding the study?</h3>
        <p>The present research project has received no funding.</p>
        <h3>Who has reviewed the study?</h3>
        <p>
          This study and its protocol have received full ethical approval from
          Northumbria University College of Reviewers (reference number: 0010).
          If you require confirmation of this, or if you have any concerns or
          worries concerning this research, or if you wish to register a
          complaint, please contact the relevant Ethics Chair,
          nick.neave@northumbria.ac.uk
        </p>
        <h3>How can I withdraw from the project?</h3>
        <p>
          During the study itself, you are free to stop your participation at
          any point by closing your browser and the research team will remove
          your answers. After you have completed the research, you can still
          withdraw your data by contacting one of the research team (their
          contact details are provided in the last section) within 2 weeks of
          participation and giving them your unique participant code that you
          will provide on the next page. After this date, it might not be
          possible to withdraw your individual data as the results might already
          have been published. As all data are anonymous, your individual data
          will not be identifiable in any way.
        </p>
        <h3>What happens if there is a problem?</h3>
        <p>
          If you are unhappy about anything during or after your participation,
          you should contact the researcher in the first instance or their
          Supervisor.
        </p>
        <FormButton label="Start Survey" onClick={onNext} />
      </div>
    </>
  );
};

export default Briefing;
