import "./product_tile.css";
import { useNavigate } from "react-router-dom";

const Product_tile_view = (props) => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  let price = props.storage.price;
  let result = price.replaceAll(",", "");
  let discount = parseInt(result) - 2000;

  const redirectFullViewPage = (
    model,
    color,
    ram,
    gb,
    display,
    camera,
    battery,
    proccessor,
    price,
    img
  ) => {
    const encodedModel = encodeURIComponent(model);
    const encodedColor = encodeURIComponent(color);
    const encodedRam = encodeURIComponent(ram);
    const encodedGB = encodeURIComponent(gb);
    const encodedDisplay = encodeURIComponent(display);
    const encodedCamera = encodeURIComponent(camera);
    const encodedBattery = encodeURIComponent(battery);
    const encodedProcessor = encodeURIComponent(proccessor);
    const encodedPrice = encodeURIComponent(price);
    const encodedImg = encodeURIComponent(img);

    console.log(encodedProcessor);
    navigate(
      `/${encodedModel}/${encodedColor}/${encodedRam}/${encodedGB}/${encodedDisplay}/${encodedCamera}/${encodedBattery}/${encodedProcessor}/${encodedPrice}/${encodedImg}`
    );
  };

  return (
    <div
      className="product_title"
      onClick={() =>
        redirectFullViewPage(
          props.details.model,
          props.color.color,
          props.storage.ram,
          props.storage.gb,
          props.details.display,
          props.details.camera,
          props.details.battery,
          props.details.processor,
          props.storage.price,
          props.color.img
        )
      }
    >
      <div className="product_tile_img">
        <img src={props.color.img} alt="product img" />
      </div>
      <div className="produt_tile_details">
        <h3>
          {props.details.model}( {props.color.color},{props.storage.gb})
        </h3>
        <ul>
          <li>
            {props.storage.ram} RAM | {props.storage.gb}
          </li>
          <li> {props.details.display}</li>
          <li> {props.details.camera}</li>
          <li> {props.details.battery}</li>
          <li> {props.details.processor}</li>
          <li>
            1 Year Manufacturer Warranty for Device and 6 Months Manufacturer
            Warranty for Inbox Accessories
          </li>
        </ul>
      </div>
      <div className="product_tile_priceDetails">
        <h1>₹{props.storage.price}</h1>
        <ul>
          <li style={{ color: "lightgreen" }}>10% Off</li>
          <li>Free Delivery By Tomorrow</li>
          <li>save extra with combo offer</li>
          <li>Upto ₹{discount}</li>
        </ul>
      </div>
    </div>
  );
};

export default Product_tile_view;
