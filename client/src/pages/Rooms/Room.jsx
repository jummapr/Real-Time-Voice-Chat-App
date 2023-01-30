import React, { useState } from "react";
import styled from "styled-components";
import Add__Room from "../../components/Add__Room_Model/Add__Room";
import RoomCard from "../../components/Room__Card/RoomCard";

const rooms = [
  {
    id: 1,
    topic: "Which framework best for frontend ?",
    speakers: [
      {
        id: 1,
        name: "John Doe",
        image: "/image/monky.png",
      },
      {
        id: 2,
        name: "Shawn  Dell",
        image: "/image/monky.png",
      },
    ],
    totalPeople: 48,
  },
  {
    id: 2,
    topic: "What’s new in machine learning",
    speakers: [
      {
        id: 1,
        name: "John Doe",
        image: "/image/monky.png",
      },
      {
        id: 2,
        name: "Shawn  Dell",
        image: "/image/monky.png",
      },
    ],
    totalPeople: 48,
  },
  {
    id: 3,
    topic: "Why people use stack overflow?",
    speakers: [
      {
        id: 1,
        name: "John Doe",
        image: "/image/monky.png",
      },
      {
        id: 2,
        name: "Shawn  Dell",
        image: "/image/monky.png",
      },
    ],
    totalPeople: 48,
  },
  {
    id: 3,
    topic: "Why people use stack overflow?",
    speakers: [
      {
        id: 1,
        name: "John Doe",
        image: "/image/monky.png",
      },
      {
        id: 2,
        name: "Shawn  Dell",
        image: "/image/monky.png",
      },
    ],
    totalPeople: 48,
  },
];

const Room = () => {

  const [showModel, setShowModel] = useState(false);

  const OpenModel = () => {
      setShowModel(true);
  }
  
  return (
    <Room__Components>
      <div className="container">
        <div className="Room__Header">
          <div className="left">
            <span className="heading">All voice rooms</span>
            <div className="Search__Box">
              <img src="/image/Search.png" alt="searchIcon" />
              <input type="text" className="Search__Input" />
            </div>
          </div>
          <div className="right">
            <button onClick={OpenModel} className="Start__Room__Btn">
              <img src="/image/Start_Room.png" alt="Room" />
              <span>Start a room</span>
            </button>
          </div>
        </div>

        <div className="Room__list">
          {rooms.map(room => (
            <>
            <RoomCard key={room.id} room={room} />
            </>
          ))}
        </div>
      </div>
      {showModel && <Add__Room onClose={setShowModel}/>}
    </Room__Components>
  );
};

const Room__Components = styled.div`
  .container {
    .Room__Header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0;
      .left {
        display: flex;
        align-items: center;
        .heading {
          font-family: "Nunito";
          font-style: normal;
          font-weight: 700;
          font-size: 22px;
          line-height: 30px;
          text-align: center;
          color: #ffffff;
          position: relative;

          &::after {
            content: "";
            position: absolute;
            top: 35px;
            bottom: 0;
            left: 0;
            width: 60%;
            height: 4px;
            background: #0077ff;
          }
        }
        .Search__Box {
          background: #262626;
          border-radius: 50px;
          margin-left: 20px;
          display: flex;
          align-items: center;
          padding: 0 10px;
          min-width: 300px;

          .Search__Input {
            background-color: transparent;
            border: none;
            outline: none;
            padding: 10px;
            color: #fff;
            width: 100%;
          }
        }
      }
      .right {
        .Start__Room__Btn {
          display: flex;
          align-items: center;
          background: #20bd5f;
          border-radius: 50px;
          cursor: pointer;
          padding: 10px 20px;
          transition: all 0.3s ease-in-out;

          span {
            font-family: "Nunito";
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 25px;
            color: #ffffff;
            margin-left: 8px;
          }

          &:hover {
            background-color: #027a32;
          }
        }
      }
    }

    .Room__list {
      display: grid;
      grid-template-columns: repeat(4,1fr);
      gap: 20px;
      margin-top: 60px;
    }
  }
`;

export default Room;
