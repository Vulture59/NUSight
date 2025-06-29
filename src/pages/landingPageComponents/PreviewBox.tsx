import cherryImg from "../../assets/cherry.jpg";

type StudySpot = {
  Location: string;
  Desc: string;
  Rating: number;
  Img?: string;
};

const PreviewBox = ({ studyspot }: { studyspot: StudySpot }) => {
  const rating = studyspot.Rating ?? 0;
  const img = studyspot.Img ?? cherryImg; // Fallback image if none provided
  const fullStars = Math.round(rating);

  return (
    <div className="preview-box">
      <img src={img} className="preview-image" />
      <div>
        <h1>{studyspot.Location}</h1>
        <p>{studyspot.Desc}</p>
        <div className="rating">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <span key={i} className="star">
                {i < fullStars ? "★" : "☆"}
              </span>
            ))}
          <span>{rating.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default PreviewBox;
