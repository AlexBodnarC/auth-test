import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import { AuthContext } from './contexts/auth.context';

function App() {
  const { authUser } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Auth}/>
        <Route path='/home' Component={Home}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
