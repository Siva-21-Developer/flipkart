import "./Product-Card.css";
import { useNavigate } from "react-router-dom";

const Product_Card = (props) => {
  const navigate = useNavigate();

  const handleClick = (productId, productModel, categories) => {
    if (categories === "mobile" || categories === "laptop") {
      navigate(
        `/${productId}/${productModel !== "Mobiles" ? productModel : "all"}`
      );
    } else if (
      categories === "footwears" ||
      categories === "wdr" ||
      categories === "smartWatch" ||
      categories === "women footwears" ||
      categories === "earbuds" ||
      categories === "men footwears"
    ) {
      navigate(`/${productId}/${categories}/${productModel}`);
    }
  };

  return (
    <div
      className="productCon"
      onClick={() =>
        handleClick(
          props.productDetails.id,
          props.productDetails.model
            ? props.productDetails.model
            : props.productDetails.product,
          props.productDetails.categories
        )
      }
    >
      <div className="img-con">
        <img src={props.productDetails.img} alt="Product-image" />
      </div>
      <div className="product-content">
        <span>
          {props.productDetails.model
            ? props.productDetails.model
            : props.productDetails.product}
        </span>
        <h5>
          {props.productDetails.price
            ? props.productDetails.price
            : props.productDetails.offers}
        </h5>
      </div>
    </div>
  );
};

export default Product_Card;
