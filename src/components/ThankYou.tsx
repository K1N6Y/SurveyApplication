import React from "react";
import FormTitle from "./Layout/FormTitle";

const ThankYou: React.FC = () => {
  return (
    <>
      <FormTitle
        title="Thank you for taking the survey!"
        step={6}
        totalSteps={6}
      />
      <div className="p-4 bg-light">
        <h2>Participant Debrief Sheet</h2>
        <hr />
        <h3>What was the purpose of the project?</h3>
        <p>
          The purpose of this study was to investigate how effectively someone
          with high levels of ADHD traits can complete cognitive tasks and how
          their cognitive abilities differ from those with low levels of ADHD
          traits, and how this may differ between gender.
        </p>
        <h3>How will I find out about the results?</h3>
        <p>
          Once the study has been completed, the researcher will prepare a
          general summary of the findings that will be ready around 12/04/2023.
          If you would like a copy of this general summary, please email the
          researcher at the address:{" "}
          <a href="mailto:w21011345@northumbria.ac.uk">
            w21011345@northumbria.ac.uk
          </a>
          .
        </p>
        <h3>
          If I change my mind and wish to withdraw the information I have
          provided, how do I do this?
        </h3>
        <p>
          If for any reason, you wish to withdraw your data please contact the
          investigator within two weeks of your participation. After this date,
          it might not be possible to withdraw your individual data as the
          results might already have been published.
        </p>
        <h3>Further information and support.</h3>
        <p>
          If you would like further information and support about the topics
          covered in the study, please contact the organisations below:
        </p>
        <h3>ADHD foundation:</h3>
        <p>
          <a href="https://www.adhdfoundation.org.uk">
            https://www.adhdfoundation.org.uk
          </a>
        </p>
        <h3>NHS Support for ADHD:</h3>
        <p>
          <a href="https://www.nhs.uk/conditions/attention-deficit-hyperactivity-disorder-adhd/">
            https://www.nhs.uk/conditions/attention-deficit-hyperactivity-disorder-adhd/
          </a>
        </p>
        <h3>How to try and get tested clinically for ADHD through the NHS</h3>
        <p>
          <a href="https://www.nhs.uk/conditions/attention-deficit-hyperactivity-disorder-adhd/diagnosis/">
            https://www.nhs.uk/conditions/attention-deficit-hyperactivity-disorder-adhd/diagnosis/
          </a>
        </p>
        <h3>
          The data collected in this study may also be published in scientific
          journals or presented at conferences.
        </h3>
        <p>
          Information and data gathered during this research study will only be
          available to the research team identified in the information sheet.
          Should the research be presented or published in any form, all data
          will be anonymous (i.e. your personal information or data will not be
          identifiable). All information and data gathered during this research
          will be stored in line with the Data Protection Act. If the research
          is published in a scientific journal it may be kept for an indefinite
          time in line with Open Data Polices, however, please be assured that
          such data will be deidentified and at no point will your personal
          information or data be revealed. Insurance companies and employers
          will not be given any individual’s personal information, nor any data
          provided by them, and nor will we allow access to the police, security
          services, social services, relatives or lawyers, unless forced to do
          so by the courts.
        </p>
        <h3>
          This study and its protocol have received full ethical approval from
          Northumbria University College of Reviewers (?).
        </h3>
        <p>
          If you require confirmation of this, or if you have any concerns or
          worries concerning this research, or if you wish to register a
          complaint, please contact:{" "}
          <a href="mailto:nick.neave@northumbria.ac.uk">
            nick.neave@northumbria.ac.uk
          </a>
        </p>
        <p>
          <strong>Thank you for participating</strong>
        </p>
      </div>
    </>
  );
};

export default ThankYou;
