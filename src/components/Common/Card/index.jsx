import { useMemo } from "react";
import ActivityCard from "../ActivityCard";
import "./style.css";
import Image_1 from "../../../assets/Image-1.png";
import Image_2 from "../../../assets/Image-2.png";
import Image_3 from "../../../assets/Image-3.png";
import Image_4 from "../../../assets/Image-4.png";

const Images = [Image_1, Image_2, Image_3, Image_4];
const randomImagePicker = () => {
  return Images[Math.floor(Math.random() * Images.length)];
};
const Card = ({ itinerary }) => {
  const randomImage = useMemo(randomImagePicker, []);

  return (
    <div
      className="card"
      style={{
        background: `url(${randomImage}) center/cover no-repeat`,
      }}
    >
      <div className="gradient-wrapper">
        <div className="day-number">{itinerary.day}</div>
        <div className="activity-cards-wrapper">
          {itinerary?.activities?.map((activity, index) => (
            <ActivityCard
              key={index}
              activity={activity}
              activityNumber={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
