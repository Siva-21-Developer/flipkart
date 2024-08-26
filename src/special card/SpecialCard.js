import "./SpecialCard.css";
import SpecialProduct from "./specialProduct";

const SpecialCard = (props) => {
  return (
    <div className="specialcard-container">
      <SpecialProduct specialCards={props.specialCards[0]} />
      <SpecialProduct specialCards={props.specialCards[1]} />
      <SpecialProduct specialCards={props.specialCards[2]} />
    </div>
  );
};

export default SpecialCard;
