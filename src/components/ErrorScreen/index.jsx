import "./style.css";
import BrandHeader from "../Common/BrandHeader";
import error from "../../assets/error.svg";
const ErrorScreen = ({ errorMessage }) => {
  return (
    <div className="mainScreen">
      <div className="gradient">
        <div
          style={{
            position: "absolute",
            top: "10",
            width: "100%",
            zIndex: "1",
          }}
        >
          <BrandHeader />
        </div>
        <div className="error-content">
          <img
            src={error}
            alt="error"
            style={{
              width: "70%",
            }}
          />
          <div className="error-text">
            <div>Something went wrong</div>
            <div
              style={{
                padding: "24px",
                textAlign: "center",
              }}
            >
              {errorMessage || "Data format not as specified"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ErrorScreen;
