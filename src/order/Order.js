import NavBar from "../nav/Nav";
import "./Order.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  const { model, color, ram, gb, price, imgurl } = useParams();

  const [userName, setUserName] = useState("");
  const [street, setstreet] = useState("");
  const [street1, setstreet1] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [id, setuserId] = useState("");
  const [loading, setloading] = useState(false);
  const [buttonname, setbuttonName] = useState("Order");

  useEffect(() => {
    userData();
  }, []);

  const userData = async () => {
    try {
      await axios
        .get("http://localhost:5000/user", {
          withCredentials: true,
        })
        .then((result) => {
          if (result) {
            setUserName(result.data.userData.userName);
            setmobileNumber(result.data.userData.mobile);
            setuserId(result.data.userData._id);
            setstreet(result.data.userData.Address.street);
            setstreet1(result.data.userData.Address.street1);
            setcity(result.data.userData.Address.city);
            setstate(result.data.userData.Address.state);
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  const totalPrice = parseInt(price.replace(",", ""));
  const Discount = totalPrice / 10 + 40;
  const copen = Math.round(totalPrice / 80 + 20);
  const Delivery = 40;
  const total = totalPrice - Discount - copen - Delivery; // Total calculation
  // Current date
  let date = new Date();
  const date_day = date.getDate() + 4;
  const month = date.getMonth();
  const year = date.getFullYear();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date("2021-03-25");
  let day = days[d.getDay()];

  const addOrder = async () => {
    setloading(!loading);
    const data = {
      id,
      model,
      color,
      ram,
      gb,
      price,
      imgurl,
    };
    await axios
      .post("http://localhost:5000/addorder", data)
      .then((result) => {
        if (result.data.message === "success") {
          setloading(false);
          setbuttonName("ORDER PLACED SUCCUSSFULLY");
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <NavBar />
      <div className="order_items_con">
        <div className="order_items">
          <div className="userdetails">
            <h4>1</h4>
            <div>
              <h2>Login</h2>
              <h5>
                {userName} +91{mobileNumber}
              </h5>
            </div>
            <button>Change</button>
          </div>
          <div className="userdetails">
            <h4>2</h4>
            <div>
              <h2>Address</h2>
              <h5>
                {street},{street1},<br></br>
                {city},{state}
              </h5>
            </div>
            <button>Change</button>
          </div>
          <div className="product-details">
            <div
              className="userdetails"
              style={{
                backgroundColor: "rgb(0, 101, 252)",
                height: "20px",
                color: "black",
              }}
            >
              <h4>3</h4>
              <div>
                <h2>ORDER SUMMARY</h2>
              </div>
            </div>
            <div className="order_items_container">
              <aside className="cart_img">
                <img src={imgurl} alt="cart-image" />
              </aside>
              <div className="cart_details">
                <h2>
                  {model}- {ram}- {gb}
                </h2>
                <p>{color}</p>
                <h4>₹{price}</h4> {/* Safely display price */}
                <div className="cart-btn-container"></div>
              </div>
              <div>
                <>
                  {
                    <p>
                      Delivery by {day} | {date_day} - {month} - {year}
                    </p>
                  }
                </>
              </div>
            </div>
          </div>
          <div className="buttonContainer-order">
            <button onClick={() => addOrder()}>
              {loading ? "Wait...." : buttonname}
            </button>
          </div>
        </div>
        <div className="order_items_total">
          <div className="price-details-head">
            <h4>PRICE DETAILS</h4>
          </div>
          <div className="details-price">
            <div className="price-details">
              <h4>Price ({1} items)</h4>
              <h4>₹ {totalPrice}</h4> {/* Display calculated total price */}
            </div>
            <div className="price-details">
              <h4>Discount</h4>
              <h4 style={{ color: "lightgreen" }}>₹ {Discount}</h4>
            </div>
            <div className="price-details">
              <h4>Coupons for you</h4>
              <h4 style={{ color: "lightgreen" }}>₹ {copen}</h4>
            </div>
            <div className="price-details">
              <h4>Delivery Charges</h4>
              <h4>₹ {Delivery}</h4>
            </div>
          </div>
          <div className="total-details-price">
            <h2>Total Amount</h2>
            <h2>₹ {Math.round(total)}</h2> {/* Display total amount */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
