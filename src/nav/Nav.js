import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faCartShopping,
  faStore,
  faMagnifyingGlass,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [iflogin, setifLogin] = useState(false);
  const [CartData, setCartData] = useState([]);

  const redirectLoginPage = () => {
    navigate("/authentication");
  };

  const redirectProfielPage = () => {
    navigate("/profile");
  };

  const redirectordersPage = () => {
    navigate("/orders");
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    axios
      .get("http://localhost:5000/", { withCredentials: true })
      .then((result) => {
        setUser(result.data.data);
        setCartData(result.data.cartItems.length);
        if (result) {
          setifLogin(!iflogin);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logOut = () => {
    axios.get("http://localhost:5000/logout", { withCredentials: true });
    setUser("");
    setifLogin(false);
  };

  const cartItemsShow = () => {
    navigate("/cart");
  };

  const yourOrder = () => {
    navigate("/yourOrder");
  };

  return (
    <>
      <nav>
        <div className="nav-content">
          <h1>Flipkart</h1>
          <span>
            <h6>Explore</h6>
            <h6>Plus</h6>
          </span>
        </div>
        <div className="input-container">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
          />
        </div>
        {iflogin ? (
          <div className="dropdown">
            <FontAwesomeIcon icon={faCircleUser} /> {user}
            <div className="dropdown-content">
              <div
                className="dropdown-item"
                onClick={() => redirectProfielPage()}
              >
                <p>Profile</p>
              </div>
              <div className="dropdown-item" onClick={() => yourOrder()}>
                <p>Your Orders</p>
              </div>
              <div className="dropdown-item">
                <button onClick={() => logOut()}>
                  <FontAwesomeIcon icon={faSignOut} /> Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="nav-content">
            <button onClick={() => redirectLoginPage()}>Login</button>
          </div>
        )}
        <div className="nav-content" onClick={() => cartItemsShow()}>
          <div className="count">{CartData}</div>
          <FontAwesomeIcon icon={faCartShopping} />
          Cart
        </div>
        <div className="nav-content">
          <FontAwesomeIcon icon={faStore} />
          Become to seller
        </div>
      </nav>
    </>
  );
};

export default NavBar;
