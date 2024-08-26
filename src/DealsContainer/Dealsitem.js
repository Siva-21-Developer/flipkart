import "./Dealsitems.css";

const DealItems = (props) => {
  return (
    <div className="Deals-image-container">
      <img src={props.Details.img} alt="Deals Images" />
    </div>
  );
};

export default DealItems;
