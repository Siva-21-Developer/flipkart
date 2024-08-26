import "./DealsCon.css";
import DealItems from "./Dealsitem";

const DealsContainer = (props) => {
  return (
    <div className="DealsContainer">
      {props.Dealsitems.map((Deals) => (
        <DealItems key={Deals.id} Details={Deals} />
      ))}
    </div>
  );
};

export default DealsContainer;
