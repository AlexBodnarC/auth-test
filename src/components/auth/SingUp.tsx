import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { Button, InputAdornment, TextField } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { useNavigate } from "react-router-dom";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signUp = (e: any) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log("Sign un succesully");
        })
        .catch((error) => {
            console.log(error);
        });
  };

  return (
    <div style={{width: '50%'}}>
        <div className='step-title_main' style={{textAlign: 'center'}}>Account details</div>
        <div className='step-title_secondary' style={{textAlign: 'center'}}>Add your personal info</div>
        <div style={{display: 'flex', alignItems: 'center', marginTop: 25, gap: 10}}>
            <Button
                startIcon={<GoogleIcon style={{color: '#3e97ff'}}/>}
                variant="contained"
                sx={{ fontSize: 12, width: '100%', marginBottom: 2, textTransform: 'capitalize', backgroundColor: '#fff', boxShadow: 'none', border: '#ccc', borderStyle: 'solid', borderWidth: 2, borderRadius: 2, color: '#9a9a9a', fontWeight: '600'}}
            >
                Sign in with Google
            </Button>
            <Button
                startIcon={<AppleIcon style={{color: '#000'}}/>}
                variant="contained"
                sx={{ fontSize: 12, width: '100%', marginBottom: 2, textTransform: 'capitalize', backgroundColor: '#fff', boxShadow: 'none', border: '#ccc', borderStyle: 'solid', borderWidth: 2, borderRadius: 2, color: '#9a9a9a', fontWeight: '600'}}
            >
                Sign in with Apple
            </Button>
        </div>

        <div className="divider">
          <div className="divider_content">
            Or with email
          </div>
        </div>

        <form onSubmit={signUp} style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <TextField
                    inputProps={{
                        style: {fontSize: '12px', fontWeight: '600'}
                    }}
                    sx={{marginBottom: 2, width: '100%'}}
                    size="small"
                    type="text"
                    placeholder="First name"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                    inputProps={{
                        style: {fontSize: '12px', fontWeight: '600'}
                    }}
                    sx={{marginBottom: 2, borderColor: '#ccc', borderRadius: 2, width: '100%'}}
                    size="small"
                    type="text"
                    placeholder="Last name"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <TextField
                inputProps={{
                    style: {fontSize: '12px', fontWeight: '600'}
                }}
                sx={{marginBottom: 2, borderColor: '#ccc', borderRadius: 2}}
                size="small"
                type="text"
                placeholder="Creator name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                inputProps={{
                    style: {fontSize: '12px', fontWeight: '600'}
                }}
                sx={{marginBottom: 2, borderColor: '#ccc', borderRadius: 2}}
                size="small"
                type="email"
                placeholder="Email"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
                inputProps={{
                    style: {fontSize: '12px', fontWeight: '600'}
                }}
                sx={{marginBottom: 2, borderColor: '#ccc', borderRadius: 2}}
                size="small"
                type="phone"
                placeholder="Phone"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
                inputProps={{
                    style: {fontSize: '12px', fontWeight: '600'},
                    endAdornment: (
                        <VisibilityOffIcon sx={{color: '#ccc'}}/>
                    ),
                }}
                sx={{marginBottom: 2, borderColor: '#ccc', borderRadius: 2}}
                size="small"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
                inputProps={{
                    style: {fontSize: '12px', fontWeight: '600'},
                    endAdornment: (
                        <InputAdornment position="end">
                          <RemoveRedEyeIcon sx={{color: '#ccc'}}/>
                        </InputAdornment>
                    ),
                }}
                sx={{marginBottom: '5px', borderColor: '#ccc', borderRadius: 2}}
                size="small"
                type="password"
                placeholder="Confirm password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <div style={{width: '100%', marginBottom: '5px', fontSize: '14px', color: '#9b9b9b', fontWeight: '600', display: 'flex', alignItems: 'center'}}>
                <Checkbox sx={{padding: "10px 5px 10px 0px"}}/>
                I accept the <span style={{color: '#006CEA', marginLeft: '5px'}}>terms</span>
            </div>
            <Button
                variant='contained'
                type="submit"
                sx={{ textTransform: 'capitalize', backgroundColor: '#3e97ff', boxShadow: 'none'}}
                onClick={() => navigate('/home')}
            >
                Continue
            </Button>
            <div style={{textAlign: 'center', marginTop: '15px'}}>
                <span className="title_secondary">Aldready have an account? <span style={{color: '#3e97ff'}}>Sign in</span></span>
            </div>
        </form>
    </div>
  );
};

export default SignUp;