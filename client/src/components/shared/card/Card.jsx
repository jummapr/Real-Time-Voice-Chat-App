import React from 'react'
import styled from 'styled-components'

const Card = ({ title, image, children }) => {
  return (
    <Card__Components>
      <div className='card'>
            <div className='headingWrapper'>
                {image && <img src={`${image}`} alt="logo" />}
                { title && <h1 className='heading'>{title}</h1>}
            </div>
            {children}
        </div>
    </Card__Components>
  )
}

const Card__Components = styled.div`
    
    .card {
    width: 500px;
    max-width: 90%;
    min-height: 300px;
    background: #1d1d1d;
    padding: 30px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.headingWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;

    /* img{
      width: 30px;
      height: 30px;
    } */
}
.heading {
    font-size: 22px;
    font-weight: bold;
    margin-left: 10px;
}

`

export default Card
