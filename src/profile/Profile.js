import NavBar from "../nav/Nav";
import "./Profile.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [showAddress, setshowAddress] = useState(false);
  const [userName, setUserName] = useState("");
  const [isshow, setisshow] = useState(true);
  const [street, setstreet] = useState("");
  const [street1, setstreet1] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [id, setuserId] = useState("");

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

  const updateUser = async (userId, updateData) => {
    await axios
      .patch(`http://localhost:5000/users/${userId}`, updateData, {
        withCredentials: true,
      })
      .then((result) => {
        userData();
        setShow(false);
        setShow2(false);
        setshowAddress(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <NavBar />
      <div className="profile-details-container">
        <div className="profie-details">
          <div className="user_detais">
            <div className="user-img">
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg"
                alt="userimg"
              />
            </div>
            <div className="user-name">
              <h6>Hello,</h6>
              <h6>{userName}</h6>
            </div>
          </div>
          <div className="personal-details">
            <div className="details-title" onClick={() => setisshow(true)}>
              <h5>Personal Details</h5>
            </div>
            <div className="details-title" onClick={() => setisshow(false)}>
              <h5>Address</h5>
            </div>
          </div>
        </div>
        <div className="profile-container">
          {isshow ? (
            <>
              <div className="profile-header">
                <h1>Personal Information</h1>
                <button onClick={() => setShow(!show)}>
                  {show ? "Cancel" : "Edit"}
                </button>
              </div>
              <div className="profile-body">
                <div className="profile-info">
                  {show ? (
                    <input
                      type={show ? "text" : ""}
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  ) : (
                    <p>{userName}</p>
                  )}
                </div>
                <div className="save-btn">
                  {show ? (
                    <button
                      onClick={() =>
                        updateUser(id, {
                          userName: userName,
                          mobile: mobileNumber,
                        })
                      }
                    >
                      Save
                    </button>
                  ) : null}
                </div>
              </div>
              <div className="profile-header">
                <h1>Mobile Number</h1>
                <button onClick={() => setShow2(!show2)}>
                  {show2 ? "Cancel" : "Edit"}
                </button>
              </div>
              <div className="profile-body">
                <div className="profile-info">
                  {show2 ? (
                    <input
                      type={show2 ? "text" : ""}
                      value={mobileNumber}
                      onChange={(e) => setmobileNumber(e.target.value)}
                    />
                  ) : (
                    <p>{mobileNumber}</p>
                  )}
                </div>
                <div className="save-btn">
                  {show2 ? (
                    <button
                      onClick={() =>
                        updateUser(id, {
                          userName: userName,
                          mobile: mobileNumber,
                        })
                      }
                    >
                      Save
                    </button>
                  ) : null}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="profile-header">
                <h1>Address</h1>
                <button onClick={() => setshowAddress(!showAddress)}>
                  {showAddress ? "Cancel" : "Edit"}
                </button>
              </div>
              <div className="profile-body">
                <div className="address-fields">
                  <div className="profile-info-address">
                    {showAddress ? (
                      <>
                        <input
                          type={showAddress ? "text" : ""}
                          value={street}
                          onChange={(e) => setstreet(e.target.value)}
                        />
                        <input
                          type={showAddress ? "text" : ""}
                          value={street1}
                          onChange={(e) => setstreet1(e.target.value)}
                        />
                        <input
                          type={showAddress ? "text" : ""}
                          value={city}
                          onChange={(e) => setcity(e.target.value)}
                        />
                        <input
                          type={showAddress ? "text" : ""}
                          value={state}
                          onChange={(e) => setstate(e.target.value)}
                        />
                      </>
                    ) : (
                      <p>
                        {street}, {street1},{city},{state}
                      </p>
                    )}
                  </div>
                </div>

                <div className="save-btn">
                  {showAddress ? (
                    <button
                      onClick={() =>
                        updateUser(id, {
                          userName: userName,
                          mobile: mobileNumber,
                          Address: {
                            street: street,
                            street1: street1,
                            city: city,
                            state: state,
                          },
                        })
                      }
                    >
                      Save
                    </button>
                  ) : null}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
