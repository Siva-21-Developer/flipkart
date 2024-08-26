import NavBar from "../nav/Nav";
import "./Auth.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [userName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [passWord, setPassword] = useState("");
  const [street, setstreet] = useState("");
  const [street1, setstreet1] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Function to handle the "Next" button click
  const handleNext = (event) => {
    event.preventDefault(); // Prevent form submission
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    setIsLoading(true);

    const payload = {
      mobile,
      userName,
      passWord,
      street,
      street1,
      city,
      state,
    };

    const payLogin = {
      mobile,
      passWord,
    };

    const url = isLogin
      ? "http://localhost:5000/login"
      : "http://localhost:5000/register";

    axios
      .post(url, isLogin ? payLogin : payload, { withCredentials: true })
      .then((response) => {
        console.log(response.data);

        setIsLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setError("An error occurred. Please try again.");
        setIsLoading(false);
      });
  };

  return (
    <>
      <NavBar />
      <div className="authContainer">
        <div className="authHeader">
          <h1>{isLogin ? "Login" : "Register"}</h1>
        </div>
        <div className="authBody">
          <form onSubmit={handleSubmit}>
            {isLogin ? (
              <div className="loginPage">
                <div className="input-con">
                  <input
                    type="text"
                    placeholder="Mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </div>
                <div className="input-con">
                  <input
                    type="text"
                    placeholder="User Name"
                    value={passWord}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="button-con">
                  <button type="submit" disabled={isLoading}>
                    {isLoading ? "Loading..." : "Login"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="registerPage">
                {currentPage === 1 && (
                  <div className="page">
                    <div className="input-con">
                      <input
                        type="text"
                        placeholder="Mobile number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                )}
                {currentPage === 2 && (
                  <div className="page">
                    <div className="input-con-1">
                      <input
                        type="text"
                        placeholder="User Name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="input-con-1">
                      <input
                        type="text"
                        placeholder="User Name"
                        value={passWord}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <label>Address:</label>
                    <div className="input-con-1">
                      <input
                        type="text"
                        placeholder="Line 1"
                        value={street}
                        onChange={(e) => setstreet(e.target.value)}
                      />
                    </div>
                    <div className="input-con-1">
                      <input
                        type="text"
                        placeholder="Line 2"
                        value={street1}
                        onChange={(e) => setstreet1(e.target.value)}
                      />
                    </div>
                    <div className="input-con-1">
                      <input
                        type="text"
                        placeholder="City"
                        value={city}
                        onChange={(e) => setcity(e.target.value)}
                      />
                    </div>
                    <div className="input-con-1">
                      <input
                        type="text"
                        placeholder="State"
                        value={state}
                        onChange={(e) => setstate(e.target.value)}
                      />
                    </div>
                  </div>
                )}
                <div className="button-con">
                  {currentPage < 2 ? (
                    <button onClick={handleNext}>Next</button>
                  ) : (
                    <button type="submit" disabled={isLoading}>
                      {isLoading ? "Loading..." : "Submit"}
                    </button>
                  )}
                </div>
              </div>
            )}
          </form>
          {error && <p className="error-message">{error}</p>}
          <h5 className="auth-change">
            {isLogin ? (
              <>
                <p>Create Account</p>
                <h5 onClick={() => setIsLogin(false)}>Register</h5>
              </>
            ) : (
              <>
                <p>Already have an account?</p>
                <h5 onClick={() => setIsLogin(true)}>Login</h5>
              </>
            )}
          </h5>
        </div>
      </div>
    </>
  );
};

export default Auth;
