import "./CardCon.css";
import ProductCard from "./Product-Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CardCon = (props) => {
  return (
    <div className="Card-container">
      <aside>
        <h2>{props.OffersTitles}</h2>
        <a href="https://" className="arrows">
          <FontAwesomeIcon icon={faChevronRight} />
        </a>
      </aside>
      <div className="card-Containers-mobile">
        {props.ProductDetails.map((product_Details) => (
          <ProductCard
            key={product_Details.id}
            productDetails={product_Details}
          />
        ))}
      </div>
    </div>
  );
};

export default CardCon;
