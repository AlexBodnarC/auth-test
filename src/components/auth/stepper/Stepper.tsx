import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { StepContext } from '../../../contexts/step.context';
import DoneIcon from '@mui/icons-material/Done';
import { StepIconProps } from '@mui/material/StepIcon';

const steps = [
  {
    id: 1,
    label: 'Account Type',
    description: `Select your account type`,
  },
  {
    id: 2,
    label: 'Personal Info',
    description: 'Setup your personal Info',
  },
];

export default function VerticalLinearStepper() {
  const {activeStep } = React.useContext(StepContext)

  const LabelIcon = (props: StepIconProps) => {

    if(props.active){
      return <span className='stepLabel-root__active'>{props.icon}</span>
    }

    return <span className='stepLabel-root'>{props.icon}</span>;
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step) => (
          <Step key={step.id}>
            <StepLabel sx={{color: 'white'}} StepIconComponent={LabelIcon}>
              <Typography sx={{fontSize: '20px', color: 'white', fontWeight: '500'}}>{step.label}</Typography>
              <Typography sx={{fontSize: '12px', color: '#80b6f5'}}>{step.description}</Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
