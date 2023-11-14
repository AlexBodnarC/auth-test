import Button from '@mui/material/Button'
import React from 'react'
import { StepContext } from '../../../contexts/step.context'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import '../../../styles/stepper.css'

const accountTypes = [
    {
        id: 1,
        type: 'Creator',
        label: 'Sign-up as a creator',
        image: '/icons/user.svg'
    }, {
        id: 2,
        type: 'Agency',
        label: 'Sign-up as a agency',
        image: '/icons/agency.svg'
    },
]

const StepFirst = () => {
    const [selectedType, setSelectedType] = React.useState(''); 
    const {handleNext } = React.useContext(StepContext)

    const handleTypeClick = (type: string) => {
        setSelectedType(type);
    };

    return (
      <div className='step-container'>
          <div className='step-box'>
              <div className='step-title_main'>Choose an account Type</div>
              <div className='step-title_secondary'>If you need more info, please visit our <span style={{color: '#006CEA'}}>help page</span></div>
              <div style={{display: 'flex', alignItems: "center", margin: '20px 0px', gap: 20}}>
                  {accountTypes.map((acc) => {
                    return(
                        <div key={acc.id} 
                        onClick={() => handleTypeClick(acc.type)}
                        style={{
                                backgroundColor: selectedType === acc.type ? '#eef6ff' : '#fff',
                                display: 'flex', 
                                alignItems: 'center', 
                                padding: "20px", 
                                border: 1, 
                                borderStyle: 'dashed', 
                                borderColor: selectedType === acc.type ? '#3e97ff' : '#ccc', 
                                borderRadius: 10, 
                                width: '100%',
                                cursor: 'pointer'
                            }}>
                            <div style={{marginRight: 20}}>
                                <img src={acc.image}/>
                            </div>
                            <div>
                                <div style={{fontSize: '18px', fontWeight: '600', marginBottom: 10}}>{acc.type}</div>
                                <div style={{fontSize: '14px', fontWeight: '600', color: '#8b8b8b'}}>{acc.label}</div>
                            </div>
                        </div>
                    )
                  })}
              </div>
              <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                <Button
                    variant='contained'
                    onClick={handleNext}
                    endIcon={<NavigateNextIcon />}
                    sx={{ textTransform: 'capitalize', backgroundColor: '#3e97ff', boxShadow: 'none'}}
                >
                    Continue
                </Button>
              </div>
          </div>
      </div>
    )
}

export default StepFirst