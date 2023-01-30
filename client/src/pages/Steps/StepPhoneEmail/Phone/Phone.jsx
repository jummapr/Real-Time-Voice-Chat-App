import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../../../components/shared/Button/Button';
import Card from '../../../../components/shared/card/Card';
import Input from '../../../../components/shared/InputText/Input';
import { send_Otp } from '../../../../http/index';
import { useDispatch } from 'react-redux';
import { setOtp } from '../../../../store/AuthSlice';

const Phone = ({ onNext }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    
    const dispatch = useDispatch()

    const Submit = async () => {
        if(!phoneNumber) return;
      const {data} = await send_Otp({phone : phoneNumber});
        dispatch(setOtp({phone : data.phone, hash : data.hash}))
      console.log(data);
        onNext();
    }
    return (
        <Phone__Components>
        <Card title="Enter you phone number" image="image/Emoji (2).png">
            <Input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div>
                <div className='actionButtonWrap'>
                    <Button text="Next" onClick={Submit} />
                </div>
                <p className='bottomParagraph'>
                    By entering your number, you’re agreeing to our Terms of
                    Service and Privacy Policy. Thanks!
                </p>
            </div>
        </Card>
        </Phone__Components>
    );
};

const Phone__Components = styled.div`
    .actionButtonWrap {
    margin-top: 40px;
}

.bottomParagraph {
    color: #c4c5c5;
    width: 70%;
    margin: 0 auto;
    margin-top: 20px;
}

`

export default Phone;