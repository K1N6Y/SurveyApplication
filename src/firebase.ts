import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig"; // Assuming you have a separate file for Firebase configuration

interface SurveyData {
  userData: any;
  questionnaireOneScore: number;
  questionnaireTwoScore: number;
  questionnaireTwoAvgTime: number;
}

export const saveSurveyDataToFirestore = async (data: SurveyData) => {
  try {
    const docRef = await addDoc(collection(db, "surveyData"), data);
    console.log("Survey data saved with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding survey data: ", error);
  }
};

export default saveSurveyDataToFirestore;