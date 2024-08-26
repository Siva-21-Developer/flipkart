import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProCat.css";

const ProCat = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${props.details.id}/all`); // Assuming you have an ID or unique identifier for the product
  };

  return (
    <>
      <div
        className="product_cat"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <div className="product-cat-img">
          <img src={props.details.Image} alt="products" />
        </div>
        <div className="product-cat-title">
          <h4>{props.details.productName}</h4>
        </div>
      </div>
    </>
  );
};

export default ProCat;

// import "./ProCat.css";

// const ProCat = (props) => {
//   return (
//     <>
//       <div className="product_cat">
//         <div className="product-cat-img">
//           <img src={props.details.Image} alt="products" />
//         </div>
//         <div className="product-cat-title">
//           <h4>{props.details.productName}</h4>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProCat;
