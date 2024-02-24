import Check from "../../../assets/check.svg";
import CheckFill from "../../../assets/check-fill.svg";
import "./style.css";
const Option = ({ option, isSelected, onSelect }) => {

  return (
    <div
      className={`custom-option ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(option.value)}
    >
      <div className="custom-option-icon">
        {isSelected ? (
          <img src={CheckFill} alt="Selected" />
        ) : (
          <img src={Check} alt="Not Selected" />
        )}
      </div>
      <div className="custom-option-label">{option.value}</div>
    </div>
  );
};
export default Option;
