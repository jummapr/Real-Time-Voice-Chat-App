import React from "react";
import styled from "styled-components";

const RoomCard = ({ room }) => {
  return (
    <Room__Card>
      <div className="card">
        <h3>{room.topic}</h3>
        <div className="speakers">
          <div className="avatar">
            {room.speakers.map((speaker) => (
              <img key={speaker.id} src={speaker.image} alt="speaker" />
            ))}
          </div>
          <div className="names">
            {room.speakers.map((speaker) => (
              <div key={speaker.id} className="Name__Warper">
                <span>{speaker.name}</span>
                <img src="/image/UserMessage.png" alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="People__Count">
          <span>{room.totalPeople}</span>
          <img src="/image/UserCount.png" alt="" />
        </div>
      </div>
    </Room__Card>
  );
};

const Room__Card = styled.div`
  .card {
    background: #1d1d1d;
    border-radius: 20px;
    padding: 30px;
    /* width: 15rem; */
    /* height: 8rem; */
    cursor: pointer;
    h3 {
    /* padding: 7px; */
      font-weight: 700;
      font-size: 16px;
      color: #ffffff;
    }
    .speakers {
      display: flex;
      align-items: center;
      position: relative;
      margin: 15px 0;
      .avatar {
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #20bd5f;
          position: absolute;
          top: 0;
          left: 0;
          background-color: #1d1d1d;
        }
        img:last-child {
          top: 20px;
          left: 20px;
        }
      }
      .names {
        margin-left: 100px;

        .Name__Warper {
          span {
            padding-bottom: 5px;
            display: inline-block;
            margin-right: 5px;
          }
          img {
          }
        }
      }
    }
    .People__Count {
      text-align: right;
      span {
        font-weight: bold;
        margin-right: 5px;
      }
      img {
      }
    }
  }
`;

export default RoomCard;
