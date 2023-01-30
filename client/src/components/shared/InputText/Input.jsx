import React from "react";
import styled from "styled-components";

const Input = (props) => {
  return (
    <Input__Components>
      <div>
        <input
          className="input"
          style={{ width: props.fullwidth === "true" ? "100%" : "inherit" }}
          type="text"
          {...props}
        />
      </div>
    </Input__Components>
  );
};

const Input__Components = styled.div`
  .input {
    background: #323232;
    border: none;
    padding: 10px 20px;
    width: 200px;
    color: #fff;
    font-size: 18px;
    border-radius: 10px;
    outline: none;
  }
`;

export default Input;
