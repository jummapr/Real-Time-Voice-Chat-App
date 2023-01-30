import React from 'react'
import { useState } from 'react'
import StepAvatar from '../Steps/StepAvatar/StepAvatar';
import StepName from '../Steps/StepName/StepName';

const steps = {
  1: StepName,
  2: StepAvatar
}


const Activate = () => {
  const [step,setStep] = useState(1);
  const Steps = steps[step];
  const onNext = () => {
    setStep(step + 1);
  }
  return (
    <div>
      <Steps onNext={onNext}></Steps>
    </div>
  )
}

export default Activate
