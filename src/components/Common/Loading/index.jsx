import "./style.css";
const Loading = () => {
  return (
    <div className="cards-container-loading">
      <div
        className="animation-layer-loading"
        style={{
          position: "absolute",
          backgroundColor: "#192226",
          width: "101%",
          height: "100%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "100",
        }}
      >
        <div
          className="cutout-loading"
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "230px",
            height: "360px",
            borderRadius: "130px",
            border: "12px solid white",
            outline: "16px solid #2B3C44",
          }}
        ></div>
      </div>
      <div className="text-loading">
        Crafting the ultimate itinerary for you.
      </div>
    </div>
  );
};

export default Loading;
