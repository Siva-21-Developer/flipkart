import NavBar from "../nav/Nav";
import "./FullViewOfPrduct.css";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTag } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Notifi from "../notification/Notficiation";

const FullViewOfMobile = () => {
  const navigate = useNavigate();
  const [addcarts, setaddcarts] = useState(false);

  const [message, setMessage] = useState("");
  const [active, setActive] = useState(false);
  const [icons, seticons] = useState(false);

  const Notificaion = (active, icons, message) => {
    setActive(active);
    seticons(icons);
    setMessage(message);
    setTimeout(() => {
      setActive(false);
      seticons(false);
      setMessage("");
    }, 2000);
  };

  window.scrollTo(0, 0);
  const {
    model,
    color,
    ram,
    gb,
    display,
    camera,
    battery,
    processor,
    price,
    imgurl,
  } = useParams();

  let priceData = new Intl.NumberFormat().format(price);
  const [imgUrl, setImgUrl] = useState(imgurl); // Corrected state name

  const imageUrls = [imgurl, imgurl, imgurl, imgurl];

  const addCartItem = () => {
    setaddcarts(!addcarts);
    const CartData = {
      model,
      color,
      ram,
      gb,
      display,
      camera,
      battery,
      processor,
      price,
      imgurl,
    };

    axios
      .post("http://localhost:5000/cart/add", CartData, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.message === "success") {
          Notificaion(true, true, "Product Added");
        }
      })
      .catch((error) => {
        Notificaion(true, false, "Failed");
      });
  };

  const redirectordersPage = () => {
    const encodedModel = encodeURIComponent(model);
    const encodedColor = encodeURIComponent(color);
    const encodedRam = encodeURIComponent(ram);
    const encodedGB = encodeURIComponent(gb);
    const encodedPrice = encodeURIComponent(price);
    const encodedImg = encodeURIComponent(imgurl);
    navigate(
      `/order/${encodedModel}/${encodedColor}/${encodedRam}/${encodedGB}/${encodedPrice}/${encodedImg}`
    );
  };

  return (
    <>
      <Notifi actives={active} icons={icons} message={message} />
      <NavBar />
      <div className="Procuct_Conatains_full">
        <div className="Product_fullView">
          <div className="Product_fullView_img">
            <div className="container">
              <div className="product-images">
                {imageUrls.map((image, index) => (
                  <div
                    key={index}
                    className="image-small-view"
                    onMouseOver={() => setImgUrl(image)}
                  >
                    <img src={image} alt="product-image" />
                  </div>
                ))}
              </div>
              <div className="product-full-view">
                <img src={imgUrl} alt="product" />
              </div>
              <div className="product-button-container">
                <button className="product-button" onClick={addCartItem}>
                  <FontAwesomeIcon icon={faCartShopping} />{" "}
                  {addcarts ? "Go To Cart" : "Add to cart"}
                </button>
                <button
                  className="product-button"
                  onClick={() => redirectordersPage()}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="Product_full_details">
            <div className="Product_model">
              <h1>{model}</h1>
            </div>
            <div className="Product_brand">
              <h3>{color}</h3>
            </div>
            <div className="Product_rating">
              <p>Rating: 4.5/5</p>
            </div>
            <div className="Product_price">
              <h1>₹{price}</h1>
            </div>
            <div className="Product_brand">
              <h3>
                {ram} RAM | {gb}
              </h3>
            </div>
            <div className="Product_brand">
              <h3>{display}</h3>
            </div>
            <div className="Product_brand">
              <h3>{camera}</h3>
            </div>
            <div className="Product_brand">
              <h3>{battery} mah</h3>
            </div>
            <div className="Product_brand">
              <h3>{processor}</h3>
            </div>
            <div className="Product_ava_off">
              <h4>Available offers</h4>
              <div className="offers_ava">
                <p>
                  <FontAwesomeIcon icon={faTag} style={{ color: "green" }} />{" "}
                  Bank Offer ₹4000 Off On ICICI Bank Credit Non EMI, Credit, and
                  Debit Card EMI Transactions
                  <a href="http://">T&C</a>
                </p>
              </div>
              <div className="offers_ava">
                <p>
                  <FontAwesomeIcon icon={faTag} style={{ color: "green" }} />{" "}
                  Bank Offer 5% Cashback on Flipkart Axis Bank Card
                  <a href="http://">T&C</a>
                </p>
              </div>
              {/* Add more offers here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullViewOfMobile;
