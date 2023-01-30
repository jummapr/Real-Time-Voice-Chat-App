import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Button from '../../../components/shared/Button/Button'
import Card from '../../../components/shared/card/Card'
import Input from '../../../components/shared/InputText/Input'
import { setName } from '../../../store/ActivateSlice'

const StepName = ({onNext}) => {

    const {name} = useSelector(state => state.activate)

    const [fullName,setFullName] = useState(name);
    const dispatch = useDispatch();

    const NextStep = () => {
        if(!fullName) {
        return;
        }

        dispatch(setName(fullName))
        onNext();
    }
  return (
    <Name>
        <div className="cardWrapper">
      <Card title="What’s your full name?" image="image/Emoji (5).png">
          <Input value={fullName} onChange={(e) => setFullName(e.target.value)} />
          <div className="actionButtonWrap">
            <Button onClick={NextStep} text="Next" />
          </div>
          <p className="bottomParagraph">
          People use real names at ChatRoom :
          </p>
        </Card>
        </div>
    </Name>
  )
}

const Name = styled.div`
    
    .actionButtonWrap {
    margin-top: 40px;
}

.bottomParagraph {
    color: #c4c5c5;
    width: 70%;
    margin: 20px auto;
    text-align: center;
}
`

export default StepName
