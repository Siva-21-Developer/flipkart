import NavBar from "../nav/Nav";
import "./fashion_different_view.css";
import {
  shoe_Details,
  womenDress,
  SmartWatch,
  womenFootwears,
  wirelessHeadphone,
  menFootwears,
} from "../product_details";
import { useParams } from "react-router-dom";
import Filter from "../filter";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FashionDifferentView = (props) => {
  window.scrollTo(0, 0);
  const [currentPage, setCurrentPage] = useState(0); // State for current page
  const navigate = useNavigate();
  const { id, categories, model } = useParams();
  let product = [];
  if (categories === "wdr") {
    if (model.includes("Kurta")) {
      product = womenDress.filter((dress) => dress.class_label === "Kurti");
    } else if (model.includes("Sarres")) {
      product = womenDress.filter((dress) => dress.class_label === "saree");
    } else {
      // Exclude both "saree" and "kurti" in the last else block
      product = womenDress.filter(
        (dress) =>
          dress.class_label !== "saree" && dress.class_label !== "Kurti"
      );
    }
  } else if (categories === "footwears") {
    product = shoe_Details;
  } else if (categories === "smartWatch") {
    product = SmartWatch;
  } else if (categories === "women footwears") {
    product = womenFootwears;
  } else if (categories === "earbuds") {
    product = wirelessHeadphone;
  } else if (categories === "men footwears") {
    product = menFootwears;
  }

  const ProductPerPage = 20;
  const totalPages = Math.ceil(product.length / ProductPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * ProductPerPage;
  const currentMovies = product.slice(startIndex, startIndex + ProductPerPage);

  const rediredtFullPageView = (
    model,
    brand,
    price,
    originalprice,
    offer,
    imgurl
  ) => {
    const encodedModel = encodeURIComponent(model);
    const encodedBrand = encodeURIComponent(brand);
    const encodedImgUrl = encodeURIComponent(imgurl);

    const urlString = `/${encodedModel}/${encodedBrand}/${price}/${originalprice}/${offer}/${encodedImgUrl}`;
    navigate(urlString);
  };

  return (
    <>
      <NavBar />
      <div className="fashion_different_view_container">
        <Filter />
        <div className="fashion_different_view">
          <div className="product_count">
            <h4 className="fashion_different_view_heading">Product List</h4>
            <span>
              (Showing {startIndex + 1}-{startIndex + ProductPerPage} products
              of {product.length} products)
            </span>
          </div>
          {currentMovies.map((product, index) => (
            <div
              key={index}
              className="fashionCard"
              onClick={() =>
                rediredtFullPageView(
                  product.name ? product.name : product.Model,
                  product.brand ? product.brand : product.class_label,
                  product.price,
                  parseInt(product.price) * 9.5,
                  Math.floor(Math.random() * 51) + 50,
                  product.imageURL
                )
              }
            >
              <div className="fashionCardImg">
                <img
                  src={product.imageURL}
                  alt={`${product.name ? product.name : product.Model} img`}
                />
              </div>
              <div className="fashionCardInfo">
                <span>
                  {product.brand ? product.brand : product.class_label}
                </span>
                <h5>{product.name ? product.name : product.Model}</h5>
                <h4>
                  ₹{product.price}
                  <p> ~ {parseInt(product.price) * 9.5}</p>
                  <span>{Math.floor(Math.random() * 51) + 50}% off</span>
                </h4>
              </div>
            </div>
          ))}
          <div className="pagination-controls">
            <span>
              Page {currentPage + 1} of {totalPages}
            </span>

            <button
              onClick={handlePreviousPage}
              style={{ display: `${currentPage === 0 ? "none" : "block"}` }}
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              style={{
                display: `${currentPage === totalPages - 1 ? "none" : "block"}`,
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FashionDifferentView;
