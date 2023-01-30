import React from "react";
import styled from "styled-components";
import Card from "../card/Card";

const Loader = ({ message }) => {
  return (
    <Loader__Components>
      <div className="cardWrapper">
        <Card>
          <svg
            className="spinner"
            width="42"
            height="42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="21" cy="21" r="18" stroke="#C4C5C5" strokeWidth="4" />
            <path
              d="M20.778 1.001A20 20 0 111.542 25.627l3.876-.922a16.016 16.016 0 1015.404-19.72l-.044-3.984z"
              fill="#5453E0"
            />
          </svg>
          <span className="message">{message}</span>
        </Card>
      </div>
    </Loader__Components>
  );
};

const Loader__Components = styled.div`
.cardWrapper {
    margin-top: 6rem;
}
  .message {
    font-weight: bold;
    font-size: 22px;
  }
  .spinner{
    margin-bottom: 20px;
    animation: spin 1s ease-in-out infinite;

  }

  @keyframes spin {
    100%{
        transform: rotate(360deg);
    }
  }
`;

export default Loader;
