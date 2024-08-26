import "./Carousle_items.css";

const Carousel_items = (props) => {
  const { imgs, isActive } = props.details;

  return (
    <>
      <div className={`carousel_items_details ${isActive ? "active" : ""}`}>
        <img src={imgs} alt="Carousel item" />
      </div>
    </>
  );
};

export default Carousel_items;
