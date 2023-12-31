import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { auth } from "../../firebase";
import { AuthContext } from "../../contexts/auth.context";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Sign in succesully");
            setTimeout( ()=> {navigate('/home')}, 100)
        })
        .catch((error) => {
            console.log(error);
        });
  };

  return (
    <div className="sign-in-container">
        <form onSubmit={signIn}>
            <h1>Log In to your Account</h1>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button type="submit">Log In</button>
        </form>
    </div>
  );
};

export default SignIn;