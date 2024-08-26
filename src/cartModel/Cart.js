import NavBar from "../nav/Nav";
import "./Cart.css";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";

const Cart = () => {
  const [CartData, setCartData] = useState([]);
  const [Coupons, setCoupons] = useState(0);
  const [Delivery, setDelivery] = useState(0);

  useEffect(() => {
    fetchUserData();
  }, [CartData]);

  const fetchUserData = async () => {
    try {
      const result = await axios.get("http://localhost:5000/", {
        withCredentials: true,
      });
      setCartData(result.data.cartItems);
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  const deleteCart = async (id) => {
    try {
      await axios
        .delete(`http://localhost:5000/${id}`, {
          withCredentials: true,
        })
        .then((result) => {
          if (result) {
            fetchUserData();
          }
        });
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  useEffect(() => {
    if (CartData.length > 0) {
      setCoupons(Math.round(Math.random() * 100)); // Random number between 0-100
      setDelivery(Math.round(Math.random() * 100)); // Random number between 0-100
    }
  }, []);

  // Memoize the total price calculation
  const totalPrice = useMemo(() => {
    return CartData.reduce((total, item) => {
      const value = item.product.price;
      const price = parseInt(value.replace(",", "") || 0);
      return total + price;
    }, 0);
  }, [CartData]);

  const Discount = totalPrice / 10 + 40; // Calculating discount
  const total = totalPrice - Discount - Coupons + Delivery; // Total calculation

  return (
    <>
      <NavBar />
      <div className="Cart_items_con">
        <div className="Cart_items">
          {CartData.length > 0 ? (
            CartData.map((items) => (
              <div className="cart_items_container" key={items._id}>
                <aside className="cart_img">
                  <img src={items.product?.imgUrl} alt="cart-image" />
                </aside>
                <div className="cart_details">
                  <h2>{items.product?.model}</h2>
                  <h4>₹{items.product?.price || 0}</h4>{" "}
                  {/* Safely display price */}
                  <div className="cart-btn-container">
                    <button className="cart-btn">Save for later</button>
                    <button
                      className="cart-btn"
                      onClick={() => deleteCart(items._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="cart-empty">
              <h2>Cart is empty</h2>
            </div>
          )}
        </div>
        <div className="Cart_items_total">
          <div className="price-details-head">
            <h4>PRICE DETAILS</h4>
          </div>
          <div className="details-price">
            <div className="price-details">
              <h4>Price ({CartData.length} items)</h4>
              <h4>₹ {totalPrice}</h4> {/* Display calculated total price */}
            </div>
            <div className="price-details">
              <h4>Discount</h4>
              <h4 style={{ color: "lightgreen" }}>₹ {Discount.toFixed(2)}</h4>
            </div>
            <div className="price-details">
              <h4>Coupons for you</h4>
              <h4 style={{ color: "lightgreen" }}>₹ {Coupons}</h4>
            </div>
            <div className="price-details">
              <h4>Delivery Charges</h4>
              <h4>₹ {Delivery}</h4>
            </div>
          </div>
          <div className="total-details-price">
            <h2>Total Amount</h2>
            <h2>₹ {total.toFixed(2)}</h2> {/* Display total amount */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
