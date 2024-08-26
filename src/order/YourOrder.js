import NavBar from "../nav/Nav";
import "./YourOrder.css";
import axios from "axios";
import { useEffect, useState } from "react";

const YourOrder = () => {
  const [OrderData, setOrderData] = useState([]);
  useEffect(() => {
    fetchUserData();
  }, [OrderData]);

  const fetchUserData = async () => {
    try {
      const result = await axios.get("http://localhost:5000/", {
        withCredentials: true,
      });
      setOrderData(result.data.OrderData);
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="your-order-container">
        {OrderData.length > 0 ? (
          OrderData.map((items) => (
            <div className="order_container_items">
              <aside className="order-img-con">
                <img src={items.imgurl} alt="" />
              </aside>
              <div className="order-product-detils">
                <h3>{items.product.model}</h3>
                <h5>{items.product.color}</h5>
                <h1>₹ {items.product.price}</h1>
              </div>
              <div></div>
            </div>
          ))
        ) : (
          <div className="order-empty">
            <h2>order is empty</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default YourOrder;
