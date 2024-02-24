import "./style.css";
import BrandHeader from "../Common/BrandHeader/index.jsx";
import Card from "../Common/Card/index.jsx";
import Button from "../Common/Button/index.jsx";
import { Link, useLocation } from "react-router-dom";
import useFetchAPI from "../../hooks/useFetchAPI.js";
import Loading from "../Common/Loading/index.jsx";
import ErrorScreen from "../ErrorScreen/index.jsx";
import { createTripPrompt } from "../../utils/prompt.js";
import { useEffect, useState } from "react";

const ItineraryScreen = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const { inputValues } = location.state || {};
  const prompt = createTripPrompt({
    where_to: inputValues[1],
    number_of_days: inputValues[2],
    trip_start: inputValues[3],
    itinerary_type: inputValues[4],
    budget: inputValues[5],
    travel_preference: "",
  });

  useEffect(() => {
    // write a fetch call to get the data from the openAI API, also dont forget to pass prompt as body :)
  }, []);

  const itineraries = data?.itinerary || [];
  if (data) {
    return (
      <div className="itinerary-screen">
        <BrandHeader />
        <div className="cards-wrapper">
          {itineraries?.map((itinerary, index) => {
            return <Card itinerary={itinerary} key={index} />;
          })}
        </div>
        <Link to="/fill-details" className="back-button">
          <Button text="Plan a new trip" />
        </Link>
      </div>
    );
  }
  if (loading) return <Loading />;
  if (error && !loading)
    return (
      <div>
        <ErrorScreen errorMessage={error} />
      </div>
    );
};

export default ItineraryScreen;
