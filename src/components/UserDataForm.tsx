import React, { useState } from "react";
import FormTitle from "./Layout/FormTitle.tsx";
import FormButton from "./Layout/FormButton.tsx";

interface UserData {
  gender: string;
  assignedGender: string;
  age: number;
}

interface UserDataFormProps {
  onSubmit: (userData: UserData) => void;
}

const UserDataForm: React.FC<UserDataFormProps> = ({ onSubmit }) => {
  const [userData, setUserData] = useState<UserData>({
    gender: "",
    assignedGender: "",
    age: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (userData.gender && userData.assignedGender && userData.age > 0) {
      onSubmit(userData);
      setUserData({
        gender: "",
        assignedGender: "",
        age: 0,
      });
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <>
      <FormTitle title="Personal Details" step={2} totalSteps={6} />
      <div className="p-4 bg-light">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={userData.gender}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="assignedGender" className="form-label">
              Assigned Gender at Birth
            </label>
            <select
              id="assignedGender"
              name="assignedGender"
              value={userData.assignedGender}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={userData.age}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <FormButton label="Submit" onClick={handleSubmit} />
        </form>
      </div>
    </>
  );
};

export default UserDataForm;
