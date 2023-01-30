import React, { useState } from "react";
import styled from "styled-components";
import Email from "./Email/Email";
import Phone from "./Phone/Phone";

const phoneEmailMap = {
  phone: Phone,
  email: Email,
};

const StepPhoneEmail = ({ onNext }) => {
  const [type, setType] = useState("phone");
  const Component = phoneEmailMap[type];

  return (
    <PhoneEmail>
      <div className="cardWrapper">
        <div>
          <div className="buttonWrap">
            <button
              className={`tabButton ${type === "phone" ? "active" : ""}`}
              onClick={() => setType("phone")}
            >
              <img src="/image/Vector.png" alt="phone" />
            </button>
            <button
              className={`tabButton ${type === "email" ? "active" : ""}`}
              onClick={() => setType("email")}
            >
              <img src="/image/Vector (1).png" alt="email" />
            </button>
          </div>
          <Component onNext={onNext} />
        </div>
      </div>
    </PhoneEmail>
  );
};

const PhoneEmail = styled.div`
  .cardWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 6rem;

    .buttonWrap {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .tabButton {
      width: 60px;
      height: 60px;
      background: #262626;
      border: none;
      outline: none;
      border-radius: 10px;
      cursor: pointer;
    }

    .tabButton:last-child {
      margin-left: 20px;
    }

    .active {
      background: #0077ff;
    }
  }


`;

export default StepPhoneEmail;
