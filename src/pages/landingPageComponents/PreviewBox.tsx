type StudySpot = {
  Location: string;
  Desc: string;
  Rating: number;
  Img?: string;
};

const PreviewBox = ({ studyspot }: { studyspot: StudySpot }) => {
  return (
    <div className="preview-box">
      <h1>{studyspot.Location}</h1>
      <p>{studyspot.Desc}</p>
      <p>{studyspot.Rating}</p>
    </div>
  );
};

export default PreviewBox;
