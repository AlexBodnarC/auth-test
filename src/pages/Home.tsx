import React, { useContext } from 'react'
import { AuthContext } from '../contexts/auth.context';
import { useNavigate } from 'react-router-dom';
import Header from '../components/dashboard/Header';
import Sidebar from '../components/dashboard/Sidebar';
import MainBoard from '../components/dashboard/MainBoard';

const Home = () => {
  const { authUser } = useContext(AuthContext);
  const navigate = useNavigate();
  /*if(authUser == null) {
    navigate('/');
  }*/
  return (
    <div style={{height: '100vh'}}>
      <Header/>
      <div style={{display: 'flex', paddingTop: '80px', height: 'calc(100% - 80px)'}}>
        <Sidebar/>
        <MainBoard/>
      </div>

    </div>
  )
}

export default Home