import React, { useState } from "react";
import styled from "styled-components";
import Input from "../shared/InputText/Input";
import { createRoom as create } from "../../http";
import {useNavigate} from "react-router-dom"

const Add__Room = ({ onClose }) => {
  const Close = () => {
    onClose(false);
  };
  const navigation = useNavigate() 
  const [roomType, setRoomType] = useState("open");
  const [topic, setTopic] = useState('')
  // console.log(topic);

  const createRoom = async() => {
    // server call
    try {
      if(!topic) return;
      const {data} = await create({topic,roomType})
      // console.log(data)
      navigation(`/room/${data.id}`)
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Add__Rooms>
      <div className="Model__Mask">
        <div className="Model__Body">
          <button onClick={Close} className="Close__Btn">
            <img src="/image/close.png" alt="Close" />
          </button>
          <div className="Model__Header">
            <h3>Enter the topic to be discussed</h3>
            <Input fullwidth="true" value={topic} onChange={(e) => setTopic(e.target.value)}/>
            <h2>Room Types</h2>
            <div className="Room__Types">
              <div
                onClick={() => setRoomType("open")}
                className={`Type__Box ${roomType === "open" ? "active" : ""}`}
              >
                <img src="/image/Globe.png" alt="Globe" />
                <span>Open</span>
              </div>
              <div
                onClick={() => setRoomType("social")}
                className={`Type__Box ${roomType === "social" ? "active" : ""}`}
              >
                <img src="/image/Users.png" alt="user" />
                <span>Social</span>
              </div>
              <div
                onClick={() => setRoomType("private")}
                className={`Type__Box ${
                  roomType === "private" ? "active" : ""
                }`}
              >
                <img src="/image/Private.png" alt="private" />
                <span>Private</span>
              </div>
            </div>
          </div>
          <div className="Model__Footer">
            <h2>Start a room, open to everyone</h2>
            <button onClick={createRoom}>
              <img src="/image/Emoji-Vector.png" alt="emoji" />
              Let's Go
            </button>
          </div>
        </div>
      </div>
    </Add__Rooms>
  );
};

const Add__Rooms = styled.div`
  .Model__Mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;

    .Model__Body {
      width: 50%;
      max-width: 500px;
      background-color: #1d1d1d;
      border-radius: 20px;
      position: relative;
      .Close__Btn {
        position: absolute;
        top: 8px;
        right: 10px;
        background: none;
        border: none;
        cursor: pointer;
        width: 24px;
        height: 24px;
      }
      .Model__Header {
        padding: 30px;
        border-bottom: 2px solid #262626;
        h3 {
          font-style: normal;
          font-weight: 700;
          font-size: 22px;
          line-height: 30px;
          /* text-align: center; */
          color: #ffffff;
          margin-bottom: 1rem;
        }
        h2 {
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 30px;
          color: #ffffff;
          margin-top: 1rem;
        }

        .Room__Types {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 1rem;
          .Type__Box.active {
            background-color: #262626;
          }
          .Type__Box {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            /* background-color: #262626; */
            border-radius: 10px;
            padding: 10px;
            cursor: pointer;
            img {
            }
            span {
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 22px;
              text-align: center;
              color: #ffffff;
            }
          }
        }
      }
      .Model__Footer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h2 {
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 25px;
          text-align: center;
          color: #ffffff;
          margin: 1.3rem 0;
        }
        button {
          display: flex;
          align-items: center;
          background: #20bd5f;
          border-radius: 50px;
          cursor: pointer;
          padding: 10px 20px;
          transition: all 0.3s ease-in-out;
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 25px;
          color: #ffffff;
          border: none;
          margin-bottom: 2rem;
          &:hover {
            background-color: #027a32;
          }
          img {
            margin-right: 8px;
          }
        }
      }
    }
  }
`;

export default Add__Room;
