import React, { useContext } from 'react'
import SingUp from '../components/auth/SingUp'
import SignIn from '../components/auth/SignIn'
import { AuthContext } from '../contexts/auth.context'
import SignOut from '../components/auth/SignOut'
import VerticalLinearStepper from '../components/auth/stepper/Stepper'
import StepFirst from '../components/auth/stepper/StepFirst'
import StepSecond from '../components/auth/stepper/StepSecond'
import { StepContext } from '../contexts/step.context'

const footer_routes = [
    {
        name: 'Terms'
    },{
        name: 'Plans'
    }, {
        name: 'Contact Us'
    }
]

const Auth = () => {
    const { authUser } = useContext(AuthContext);
    const { activeStep } = useContext(StepContext);

    const renderStepContent = () => {
        switch (activeStep) {
            case 0:
                return <StepFirst />;
            case 1:
                return <StepSecond />;
            default:
                return null;
        }
    };
    
    return (
      <div className='auth-page_container'>
            <div style={{width: '30%'}}>
                <div className='auth-page_block'>
                    <div><img src='/icons/logo.png'/></div>
                    <div>
                        <VerticalLinearStepper/>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', gap: 30}}>
                        {footer_routes.map((route, index) => {
                            return(
                                <div 
                                    key={index}
                                    style={{ fontSize: '12px', fontWeight: '600', color: '#50cd89', textAlign: 'center'}}
                                >
                                    {route.name}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div style={{width: '70%'}}>
                {renderStepContent()}
            </div>
      </div>
    )
}

export default Auth
