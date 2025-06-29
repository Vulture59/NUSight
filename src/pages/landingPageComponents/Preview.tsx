import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase"; // Adjust path if needed
import PreviewBox from "./PreviewBox";

type StudySpot = {
  Location: string;
  Desc: string;
  Rating: number;
  Img?: string;
};

const Preview = () => {
  const [studyspots, setStudyspots] = useState<StudySpot[]>([]);

  useEffect(() => {
    getDocs(collection(db, "studySpots"))
      .then((snapshot) => {
        const spots = snapshot.docs.map((doc) => doc.data() as StudySpot);
        setStudyspots(spots);
      })
      .catch((error) => {
        console.error("Error loading data:", error);
      });
  }, []);

  return (
    <div className="preview">
      <h1>Popular Study Spots</h1>
      <div className="preview-list">
        {studyspots.map((spot, index) => (
          <PreviewBox key={index} studyspot={spot} />
        ))}
      </div>
    </div>
  );
};

export default Preview;
