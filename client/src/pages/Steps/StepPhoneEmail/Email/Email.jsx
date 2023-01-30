import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../../../components/shared/InputText/Input";
import Button from "../../../../components/shared/Button/Button";
import Card from "../../../../components/shared/card/Card";

const Email = ({ onNext }) => {
  const [email, setEmail] = useState("");
  return (
    <Email__Components>
      <Card title="Enter your email id" image="image/Email.png ">
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        <div>
          <div className="actionButtonWrap">
            <Button text="Next" onClick={onNext} />
          </div>
          <p className="bottomParagraph">
            By entering your number, you’re agreeing to our Terms of Service and
            Privacy Policy. Thanks!
          </p>
        </div>
      </Card>
    </Email__Components>
  );
};

const Email__Components = styled.div`
  .actionButtonWrap {
    margin-top: 40px;
  }

  .bottomParagraph {
    color: #c4c5c5;
    width: 70%;
    margin: 0 auto;
    margin-top: 20px;
  }
`;

export default Email;
