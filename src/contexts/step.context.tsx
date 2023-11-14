import { User, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

interface StepProviderProps {
  children: ReactNode;
}

interface StepContextProps {
    activeStep: number;
    handleNext: () => void;
    handleBack: () => void;
    handleFinish: () => void;
}

export const StepContext = createContext<StepContextProps>({
    activeStep: 0,
    handleNext: () => {},
    handleBack: () => {},
    handleFinish: () => {},
});

export const StepProvider: React.FC<StepProviderProps> = ({ children }) => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleFinish = () => {
        setActiveStep(0);
    };
  
  return (
    <StepContext.Provider
        value={{
            activeStep,
            handleNext,
            handleBack,
            handleFinish
        }}
    >
        {children}
    </StepContext.Provider>
  );
};
