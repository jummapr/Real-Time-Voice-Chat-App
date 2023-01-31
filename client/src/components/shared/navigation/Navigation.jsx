import React, { useReducer } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { logout } from "../../../http";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../../store/AuthSlice";

const Navigation = () => {
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state) => state.auth);
  const brandStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
  };

  const logoutUser = async () => {
    try {
      const { data } = await logout();
      dispatch(setAuth(data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Navigate>
      <nav className={`navbar container`}>
        <Link style={brandStyle} to="/">
          <img src="/image/Emoji.png" alt="logo" />
          <span className="Text">ChatRoom</span>
        </Link>
        {isAuth && (
          <div className="navRight">
            <h3>{user?.name}</h3>
            {
              user.avatar && (
                <Link to="/">
                <img className="avatar" src={user.avatar} alt="user" />
              </Link>
              )
            }
            <button className="Logout__Btn" onClick={logoutUser}>
              Logout
            </button>
          </div>
        )}
      </nav>
    </Navigate>
  );
};

const Navigate = styled.div`
  .navbar {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  a {
    img {
      width: 30px;
      height: 30px;
    }
  }
  .Text {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 30px;

    /* Primary text */

    color: #ffffff;
  }
  .navRight {
    display: flex;
    justify-content: center;
    align-items: center;
    h3 {
      font-family: "Nunito";
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 30px;
      /* identical to box height */

      text-align: center;

      /* Primary text */

      color: #ffffff;
    }

    a {
      margin-left: 10px;

      .avatar {
        border-radius: 50%;
        object-fit: cover;
        border: 3px solid #0077ff;
        width: 40px;
        height: 40px;
      }
    }

    .Logout__Btn {
      background: #0077ff;
      padding: 8px 17px;
      border: none;
      outline: none;
      display: flex;
      align-items: center;
      margin: 0 auto;
      color: #fff;
      font-size: 18px;
      font-weight: bold;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      margin-left: 30px;

      &:hover {
        background: #014a9c;
      }
    }
  }
`;

export default Navigation;
