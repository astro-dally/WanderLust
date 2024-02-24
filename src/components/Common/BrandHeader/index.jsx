import BrandLogo from "../../../assets/brand-logo.svg";
import "./style.css";
const BrandHeader = () => {
  return (
    <div className="brand-header">
      <img src={BrandLogo} alt="Brand Logo" />
      <div className="brand-name-wrapper">
        <h1 className="brand-name">Wanderlust</h1>
      </div>
    </div>
  );
};

export default BrandHeader;
