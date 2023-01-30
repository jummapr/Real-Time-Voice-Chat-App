import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../../../components/shared/Button/Button";
import Card from "../../../components/shared/card/Card";
import Input from "../../../components/shared/InputText/Input";
import Loader from "../../../components/shared/Loader/Loader";
import { activated } from "../../../http";
import { SetAvatar } from "../../../store/ActivateSlice";
import { setAuth } from "../../../store/AuthSlice";

const StepAvatar = ({ onNext }) => {
  const { name ,avatar} = useSelector((state) => state.activate);
  const [loading , setLoading] = useState(false)
  const dispatch = useDispatch()

  const [image, setImage] = useState("/image/monky.png");
  const ImageListener = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        setImage(reader.result);
        dispatch(SetAvatar(reader.result));
    }
  }
  const Submit = async () => {
    setLoading(true);
    try {
     const {data} = await activated({name, avatar});
     console.log(data.user.avatar);
     if (data.auth) {
      dispatch(setAuth(data))
     }
     setLoading(false);
    } catch (error) {
        console.log(error)
        setLoading(false);
    }

    onNext();
  };

  if(loading) return <Loader message="Activation in progress ..."/>;
  return (
    <Avatar>
      <div className="cardWrapper">
        <Card title={`Okay, ${name}!`} image="image/Emoji (6).png">
          <p className="subHeading">How’s this photo?</p>

          <div className="AvatarWrap">
            <img src={image} alt="" />
          </div>
          <div>
            <input
            onChange={ImageListener}
              type="file"
              className="Fille__Input"
              name="file"
              id="avatar"
            />
            <label className="avatar__label" htmlFor="avatar">
              Choose a different photo
            </label>
          </div>
          <div className="actionButtonWrap">
            <Button onClick={Submit} text="Next" />
          </div>
        </Card>
      </div>
    </Avatar>
  );
};

const Avatar = styled.div`
  .actionButtonWrap {
    margin-top: 40px;
  }

  .subHeading {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    /* identical to box height */

    text-align: center;

    /* Secondary text */

    color: #c4c5c5;

    opacity: 0.8;
  }

  .AvatarWrap {
    width: 110px;
    height: 110px;
    border: 6px solid #0077ff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 10px 0;
    img {
      height: 80%;
      width: 80%;
      object-fit: cover;
    }
  }
  .Fille__Input {
    display: none;
    margin: 30px 0;
  }
  .avatar__label {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    /* identical to box height */

    text-align: center;

    /* Blue */

    color: #0077ff;
    opacity: 0.8;

    cursor: pointer;
  }

  .bottomParagraph {
    color: #c4c5c5;
    width: 70%;
    margin: 20px auto;
    text-align: center;
  }
`;

export default StepAvatar;
