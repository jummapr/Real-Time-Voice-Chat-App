import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../../../components/shared/Button/Button";
import Card from "../../../components/shared/card/Card";
import Input from "../../../components/shared/InputText/Input";
import { VerifyOtp } from "../../../http";
import { setAuth } from "../../../store/AuthSlice";

const StepOtp = ({ onNext }) => {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();

  const {phone,hash} = useSelector((state) => state.auth.otp)

  const Submit = async () => {
    if(!otp || !phone || !hash) return;
    try {
      const {data} = await VerifyOtp({otp, phone,hash})
      // console.log(data)
      dispatch(setAuth(data))
      // onNext();
    } catch (error) {
      console.log(error.data.message)
    }
    // onNext(); 
  }
  return (
    <Otp>
      <div className="cardWrapper">
        <Card title="Enter the code we just texted you" image="image/Loak.png">
          <Input value={otp} onChange={(e) => setOtp(e.target.value)} />
          <div className="actionButtonWrap">
            <Button onClick={Submit} text="Next" />
          </div>
          <p className="bottomParagraph">
            By entering your number, you’re agreeing to our Terms of Service and
            Privacy Policy. Thanks!
          </p>
        </Card>
      </div>
    </Otp>
  );
};

const Otp = styled.div`
.cardWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 6rem;
}
    .actionButtonWrap {
    margin-top: 40px;
}

.bottomParagraph {
    color: #c4c5c5;
    width: 70%;
    margin: 0 auto;
    margin-top: 20px;
}`;

export default StepOtp;
