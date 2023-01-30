import React from "react";
import styled from "styled-components";

const Button = ({ text, onClick }) => {
  return (
    <Button__Components>
      <button onClick={onClick} className="button">
        <span>{text}</span>
        <img className="arrow" src="/image/arrow_forward.png" alt="arrow" />
      </button>
    </Button__Components>
  );
};

const Button__Components = styled.div`
  .button {
    background: #0077ff;
    padding: 10px 20px;
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

    &:hover {
      background: #014a9c;
    }
  }
  .arrow {
    margin-left: 10px;
  }
`;

export default Button;
