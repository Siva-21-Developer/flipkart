import ProductCard from "../contents/Product-Card";
import "./specialProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const SpecialProduct = (props) => {
  return (
    <div className="Procuct-Container-card">
      <aside>
        <h2>{props.specialCards.title}</h2>
        <a href="https://" className="arrows">
          <FontAwesomeIcon icon={faChevronRight} />
        </a>
      </aside>
      <div className="products-special-containers">
        {props.specialCards.productList.map((product_Details) => (
          <ProductCard
            key={product_Details.id}
            productDetails={product_Details}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialProduct;
