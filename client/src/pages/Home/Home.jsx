import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Button from '../../components/shared/Button/Button'
import Card from '../../components/shared/card/Card'

function Home() {

    const navigate = useNavigate();
    function startRegister() {
        navigate('/authenticate');
    }
  return (
    <Home__Components>
     <div className='cardWrapper'>
            <Card title="Welcome to ChatRoom!" image="/image/Home_Emoji.png">
                <p className='text'>
                    We’re working hard to get Codershouse ready for everyone!
                    While we wrap up the finishing youches, we’re adding people
                    gradually to make sure nothing breaks
                </p>
                <div>
                    <Button onClick={startRegister} text="Let's Go" />
                </div>
                <div className='signinWrapper'>
                    <span className='hasInvite'>
                        Have an invite text?
                    </span>
                </div>
            </Card>
        </div> 
    </Home__Components>
  )
}

const Home__Components = styled.div`

.cardWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 6rem;

    .text {
    font-size: 22px;
    line-height: 1.6;
    color: #c4c5c5;
    text-align: center;
    margin-bottom: 30px;
}
.signinWrapper {
    margin-top: 20px;
}
.hasInvite {
    color: #0077ff;
}
}
 





 

`

export default Home
